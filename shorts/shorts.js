// Timeline for a 20-second division short. `T` holds the scene start times
// (seconds) written by shorts/build.py so they match the voiceover.
function buildShort(T) {
  const tl = gsap.timeline({ paused: true });

  // A: logo lockup with the division name
  tl.fromTo("#a .badge", { scale: 0.2, opacity: 0, rotation: -180 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.1, ease: "power3.out" }, 0.1)
    .to("#a .badge", { rotation: 25, duration: T.b - 1.2, ease: "none" }, 1.2)
    .fromTo("#a .name", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 0.6)
    .fromTo("#a .corp", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.9)
    .fromTo("#a .rule", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, 1.1)
    .fromTo("#a .division", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.6)" }, 1.4)
    .to("#a", { opacity: 0, duration: 0.3 }, T.b - 0.3);

  // Pinned lockup during B and C
  tl.fromTo("#chip", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, T.b + 0.1)
    .to("#chip", { opacity: 0, duration: 0.3 }, T.d - 0.3);

  // B: hook + services
  tl.fromTo("#b .hook-icon", { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)" }, T.b + 0.1)
    .fromTo("#b .hook", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, T.b + 0.3)
    .fromTo("#b .items div", { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.35, ease: "power2.out" }, T.b + 1.4)
    .to("#b", { opacity: 0, duration: 0.3 }, T.c - 0.3);

  // C: benefits
  tl.fromTo("#c .label", { opacity: 0 }, { opacity: 1, duration: 0.4 }, T.c + 0.1)
    .fromTo("#c .card", { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, stagger: 0.6, ease: "power3.out" }, T.c + 0.3)
    .to("#c", { opacity: 0, duration: 0.3 }, T.d - 0.3);

  // D: call to action
  tl.fromTo("#d .badge", { scale: 0.5, opacity: 0, rotation: -90 }, { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "power3.out" }, T.d + 0.1)
    .fromTo("#d .name, #d .corp", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, T.d + 0.4)
    .fromTo("#d .rule", { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, T.d + 0.6)
    .fromTo("#d .division", { opacity: 0 }, { opacity: 1, duration: 0.5 }, T.d + 0.8)
    .fromTo("#d .call, #d .row", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" }, T.d + 1.1)
    .fromTo("#d .phone", { scale: 1 }, { scale: 1.06, duration: 0.5, yoyo: true, repeat: 3, ease: "sine.inOut" }, T.d + 2)
    .to("#d", { opacity: 0, duration: 0.5 }, T.end - 0.5);

  return tl;
}
