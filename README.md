# TGM-WORLDWIDE CORPORATION: marketing videos

Videos built with [HyperFrames](https://github.com/heygen-com/hyperframes) (write HTML → render video). Ready-to-post MP4s are in [`renders/`](renders/).

## Videos

| Video | Source | Format | Length |
|---|---|---|---|
| Brand film, wide | `index.html` | 1920×1080 | 38s |
| Brand film, vertical | `vertical/vertical.html` | 1080×1920 | 38s |
| Medical Courier short | `shorts/medical-courier.html` | 1080×1920 | 20s |
| Truck Transportation short | `shorts/truck-transportation.html` | 1080×1920 | 20s |
| Commercial Cleaning short | `shorts/commercial-cleaning.html` | 1080×1920 | 20s |
| Real Estate short | `shorts/real-estate.html` | 1080×1920 | 20s |
| Import & Export short | `shorts/import-export.html` | 1080×1920 | 20s |

Each division short: logo + "TGM-WORLDWIDE CORPORATION" + division name → hook and services → "Why choose us" → logo, division name, phone and email. The logo and division name stay pinned at the top throughout. Every video has an AI voiceover (local Kokoro-82M via `hyperframes tts`) over a soft music bed.

## Logo files

- `assets/logo-mark.png`: round badge, transparent background
- `assets/logos/logo-full-on-dark.png` / `logo-full-on-light.png`: badge + "TGM-WORLDWIDE CORPORATION"
- `assets/logos/logo-<division>.png`: badge + company name + division name
- `assets/logo-original.png`: the logo as supplied

## Contact details

Phone **(859) 446-6897** and email **gadmboukaboukoumou@gmail.com** are set in one place, the top of [`assets/brand.js`](assets/brand.js). The website row stays hidden until a website is added. After editing, run `python3 shorts/build.py` and re-render.

## Editing the shorts

Wording, icons and voiceover scripts for all five shorts live in [`shorts/divisions.json`](shorts/divisions.json). `shorts/build.py` generates the HTML and times each scene to its voiceover. Workflow:

```bash
# 1. edit shorts/divisions.json
# 2. if a "vo" line changed, regenerate it (needs: pip install kokoro-onnx soundfile)
npx hyperframes tts "New line" -v am_michael -s 1.12 -o assets/voice/shorts/<slug>-<n>.wav
# 3. rebuild (fails if a short would run past 20s)
python3 shorts/build.py
```

## Commands

```bash
npx hyperframes preview                                   # live preview
npx hyperframes check                                     # validate
npx hyperframes render -o renders/tgm-worldwide-16x9.mp4
npx hyperframes render -c vertical/vertical.html -o renders/tgm-worldwide-9x16.mp4
npx hyperframes render -c shorts/medical-courier.html -o renders/shorts/medical-courier.mp4
```

Rendering needs Node.js 22+ and FFmpeg.
