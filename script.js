const replayButton = document.querySelector("#replay-button");
const animation = document.querySelector("#field-animation");
const viewer = document.querySelector("#animation");

if (viewer && (!window.location.hash || window.location.hash === "#animation")) {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  viewer.scrollIntoView({ block: "start" });
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
}

replayButton?.addEventListener("click", () => {
  const source = animation.getAttribute("src").split("?")[0];
  animation.setAttribute("src", `${source}?replay=${Date.now()}`);
});
