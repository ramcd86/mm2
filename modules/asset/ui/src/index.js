export default () => {
  const urlSegments = window.location.pathname.split("/");
  const pageBase = document.getElementById("pageBase");
  if (pageBase && urlSegments) {
    if (urlSegments[1] === "") {
      pageBase.classList.add("home");
    } else {
      pageBase.classList.add(`${urlSegments[1]}`);
    }
  }
};
