---
title: "Sign language detection with LSTMs"
date: "2026-09-01"
excerpt: "Notes on a sign language detector I built with an LSTM and MediaPipe. Why sequences beat single frames, and where the model still falls over."
tags: ["machine-learning", "computer-vision", "python"]
readTime: "5 min read"
---

Notes on a real-time sign language detector I built with an LSTM and MediaPipe. The longer version is [on Medium](https://medium.com/@zgnxwky/sign-language-detection-using-lstm-model-5258ed3e5e34).

## Why sequences beat single frames

The first thing I tried was a CNN classifying individual frames. It never got above chance, which makes sense in retrospect. A frozen frame of "hello" and a frozen frame of "hi" can look basically identical. The information that matters lives in the motion, not the pose.

Switching to a sequence model was the biggest single win. The LSTM takes 30 frames of MediaPipe hand landmarks (about a second of video) and classifies the whole sequence. That one change moved accuracy more than all the tuning I did later.

## Data collection was the hard part

The ML was a weekend. Getting usable data took closer to three weekends.

My first samples were all different lengths, and the model wouldn't converge. I ended up writing a small OpenCV recorder that flashed the target label on screen and captured exactly 30 frames per attempt. Boring, but it fixed the problem immediately.

MediaPipe gives 21 (x, y, z) landmarks per hand. Flattened, that's a 63-dim vector per frame, so every training sample is a (30, 63) matrix. Small enough to train on a laptop, which meant I could iterate.

Augmentation helped less than I expected. Random rotation and translation in landmark space (rather than pixel space, since we're working with the landmarks directly) got me about a 4% accuracy bump.

## The model

```python
model = Sequential([
    LSTM(64, return_sequences=True, input_shape=(30, 63)),
    LSTM(128, return_sequences=True),
    LSTM(64),
    Dense(64, activation='relu'),
    Dense(num_classes, activation='softmax'),
])
```

Three LSTM layers, a dense head, categorical cross-entropy. About 2000 samples across a handful of signs. Nothing clever.

## Where it still breaks

"Please" and "sorry" both involve a circular motion on the chest. The model confuses them about 15% of the time, and nothing I've tried so far has meaningfully improved it.

Left-handed signers. I only recorded right-handed data. Mirroring the training set would probably solve it, but I never got around to doing it.

Bad lighting. MediaPipe's landmark detector falls apart when the room's too dark, and the model has no way of knowing its input is unreliable. It'll classify anyway, confidently. That's a worse failure mode than staying silent.

## What I'd try next

A transformer instead of an LSTM. Thirty frames is a trivially short sequence, and self-attention would probably do more with less data.

Training on landmark deltas rather than absolute positions. Translation invariance for free.

A "no sign detected" class trained on random hand poses. Right now the model always outputs something. It doesn't know how to say "I'm not seeing a sign."

If you're working on something similar, please reach out.
