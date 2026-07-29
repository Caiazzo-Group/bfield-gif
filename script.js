const replayButton = document.querySelector("#replay-button");
const animation = document.querySelector("#field-animation");

replayButton?.addEventListener("click", () => {
  const source = animation.getAttribute("src").split("?")[0];
  animation.setAttribute("src", `${source}?replay=${Date.now()}`);
});
