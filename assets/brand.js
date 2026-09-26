// ─────────────────────────────────────────────────────────────
// TGM-WORLDWIDE CORPORATION — business contact details shown at the end of the video.
// Edit here, then re-render. The division shorts read these too: run `python3 shorts/build.py` after editing.
// Leave a value empty ("") to hide that row.
// ─────────────────────────────────────────────────────────────
const CONTACT = {
  phone: "(859) 446-6897",
  email: "gadmboukaboukoumou@gmail.com",
  website: "",
};

document.querySelectorAll("[data-contact]").forEach((el) => {
  const value = CONTACT[el.dataset.contact];
  if (value) el.textContent = value;
  else el.closest(".row").remove();
});

// Shared animation timeline (used by both the 16:9 and 9:16 versions).
// Times are in seconds and must match the data-start values in the HTML.
const SCENES = {
  intro: 0,
  divisions: [5, 9, 13, 17, 21], // 4 s each
  vision: 25,
  outro: 31,
  end: 38,
};

function buildTimeline() {
  const tl = gsap.timeline({ paused: true });

  // Intro
  tl.fromTo("#intro-logo", { scale: 0.3, opacity: 0, rotation: -40 }, { scale: 1, opacity: 1, rotation: 0, duration: 0.9, ease: "back.out(1.6)" }, 0.2)
    .fromTo("#intro-brand", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.9)
    .fromTo("#intro-corp", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.2)
    .fromTo("#intro-rule", { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power2.inOut" }, 1.4)
    .fromTo("#intro-tagline", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 1.8)
    .to("#intro", { opacity: 0, duration: 0.4 }, SCENES.divisions[0] - 0.4);

  // Logo bug in the corner while the divisions and vision play
  tl.fromTo("#logo-bug", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, SCENES.divisions[0] + 0.2)
    .to("#logo-bug", { opacity: 0, duration: 0.4 }, SCENES.outro - 0.4);

  // Divisions
  SCENES.divisions.forEach((t, i) => {
    const id = `#d${i + 1}`;
    tl.fromTo(`${id} .index`, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, t + 0.05)
      .fromTo(`${id} .icon`, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)" }, t + 0.1)
      .fromTo(`${id} h2`, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, t + 0.25)
      .fromTo(`${id} .pitch`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, t + 0.45)
      .to(id, { opacity: 0, x: 80, duration: 0.3, ease: "power2.in" }, t + 3.7);
  });

  // Vision
  const v = SCENES.vision;
  tl.fromTo("#vision-years span", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power3.out" }, v + 0.1)
    .fromTo("#vision-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, v + 0.9)
    .fromTo("#vision-pillars div", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.15, ease: "power2.out" }, v + 1.6)
    .to("#vision", { opacity: 0, duration: 0.4 }, SCENES.outro - 0.4);

  // Outro + contact
  const o = SCENES.outro;
  tl.fromTo("#outro-logo", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)" }, o + 0.1)
    .fromTo("#outro-brand", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, o + 0.5)
    .fromTo("#outro-corp", { opacity: 0 }, { opacity: 1, duration: 0.5 }, o + 0.7)
    .fromTo("#outro-services", { opacity: 0 }, { opacity: 1, duration: 0.6 }, o + 0.9)
    .fromTo("#contact .row", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" }, o + 1.4)
    .to("#outro", { opacity: 0, duration: 0.6 }, SCENES.end - 0.6);

  return tl;
}
