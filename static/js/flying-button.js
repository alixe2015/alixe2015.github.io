(() => {
  const stage = document.querySelector(".flying-stage");
  const button = stage?.querySelector(".flying-button");
  const smoke = stage?.querySelector(".flying-smoke");
  if (!stage || !button || !smoke) return;

  const smokeCount = Math.max(1, Number(button.dataset.smoke) || 1) * 8;
  for (let i = 0; i < smokeCount; i += 1) {
    const puff = document.createElement("span");
    puff.style.left = `${(i / smokeCount) * 100}%`;
    puff.style.setProperty("--drift", `${(i % 2 ? 1 : -1) * (12 + (i % 4) * 7)}px`);
    smoke.appendChild(puff);
  }

  button.style.setProperty("--thrust-color", button.dataset.thrustColor || "#8ec5ff");
  smoke.style.setProperty("--smoke-color", button.dataset.smokeColor || "#eef1f6");

  let resetTimer;
  const ignite = () => button.classList.add("is-ignited");
  const extinguish = () => {
    if (!stage.classList.contains("is-launching")) button.classList.remove("is-ignited");
  };
  button.addEventListener("pointerenter", ignite);
  button.addEventListener("pointerleave", extinguish);
  button.addEventListener("focus", ignite);
  button.addEventListener("blur", extinguish);

  button.addEventListener("click", () => {
    window.clearTimeout(resetTimer);
    stage.classList.remove("is-launching", "is-launched");
    button.classList.remove("is-ignited");
    // Restart CSS animations reliably after repeated clicks.
    void button.offsetWidth;
    stage.classList.add("is-launching");
    stage.querySelector(".flying-stage__hint").textContent = "THRUSTERS ENGAGED · LIFT OFF!";
    console.log("Lift off");

    resetTimer = window.setTimeout(() => {
      stage.classList.remove("is-launching");
      stage.classList.add("is-launched");
      button.classList.remove("is-ignited");
      stage.querySelector(".flying-stage__hint").textContent = "FLIGHT COMPLETE · CLICK TO REPLAY";
    }, 2450);
  });
})();