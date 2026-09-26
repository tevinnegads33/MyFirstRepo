# MyFirstRepo

## TGM-WORLDWIDE brand film (HyperFrames)

A 38-second promo video for TGM-WORLDWIDE, built with [HyperFrames](https://github.com/heygen-com/hyperframes) (write HTML → render video).

| Version | File | Size | Use it for |
|---|---|---|---|
| Wide 16:9 | `index.html` | 1920×1080 | YouTube, website, LinkedIn, presentations |
| Vertical 9:16 | `vertical/vertical.html` | 1080×1920 | Instagram Reels, TikTok, YouTube Shorts, WhatsApp Status |

Ready-to-post renders are in [`renders/`](renders/).

**Scenes:** logo intro → Medical Courier → Truck Transportation → Commercial Cleaning → Real Estate → Import & Export → 2026→2031 vision → logo + contact details.

**Audio:** male AI voiceover for every scene (generated locally with `hyperframes tts`, Kokoro-82M) over a soft ambient music bed.

### ⚠️ Before posting: add your real contact details

The phone, email and website at the end are **placeholders**. Edit them in one place — the top of [`assets/brand.js`](assets/brand.js) — and re-render. Both versions update.

### Commands

```bash
npx hyperframes preview                                   # live preview in the browser
npx hyperframes check                                     # validate
npx hyperframes render -o renders/tgm-worldwide-16x9.mp4  # wide version
npx hyperframes render -c vertical/vertical.html -o renders/tgm-worldwide-9x16.mp4  # vertical
```

Rendering needs Node.js 22+ and FFmpeg.

### Files

- `assets/logo.svg`: TGM-WORLDWIDE emblem (scalable; also usable on cards, trucks, uniforms and the website)
- `assets/brand.js`: contact details and the shared animation timeline
- `assets/brand.css`: shared colors and styles (navy `#0b1b33`, gold `#d4a64a`)
- `assets/voice/`: voiceover lines, one per scene
- `assets/music/music-bed.wav`: background music

To change a voiceover line: `npx hyperframes tts "New line" -v am_michael -s 1.05 -o assets/voice/<file>.wav` (needs `pip install kokoro-onnx soundfile`), then update that clip's `data-duration` in both HTML files.
