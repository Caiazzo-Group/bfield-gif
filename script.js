const replayButton = document.querySelector("#replay-button");
const animation = document.querySelector("#field-animation");
const viewer = document.querySelector("#animation");

if (viewer && (!window.location.hash || window.location.hash === "#animation")) {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const openAtAnimation = () => {
    const previousScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    viewer.scrollIntoView({ block: "start" });
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  };

  if (!window.location.hash) {
    window.location.replace(
      `${window.location.pathname}${window.location.search}#animation`,
    );
  }

  openAtAnimation();
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(openAtAnimation);
  });
  window.addEventListener("load", openAtAnimation, { once: true });
  window.addEventListener("pageshow", openAtAnimation, { once: true });
  window.setTimeout(openAtAnimation, 150);
}

replayButton?.addEventListener("click", () => {
  const source = animation.getAttribute("src").split("?")[0];
  animation.setAttribute("src", `${source}?replay=${Date.now()}`);
});
