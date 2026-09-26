# MyFirstRepo

## TGM-WORLDWIDE brand film (HyperFrames)

`index.html` is a [HyperFrames](https://github.com/heygen-com/hyperframes) composition: a 24-second, 1920×1080 promo video for TGM-WORLDWIDE.

Scenes: intro → Medical Courier → Truck Transportation → Commercial Cleaning → Real Estate → Import & Export → 2026→2031 vision → outro.

```bash
npx hyperframes preview   # live preview in the browser
npx hyperframes check     # validate the composition
npx hyperframes render    # render to MP4 (needs ffmpeg)
```

To edit the wording, change the text in each `<section>`; timing lives in the `data-start` / `data-duration` attributes and the GSAP timeline at the bottom of the file.
