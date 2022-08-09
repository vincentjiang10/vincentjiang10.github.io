// -- Scrolling animation ---

const contentItems = document.querySelectorAll(".contentItem");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.5,
});

// set observer to observe each contentItem
contentItems.forEach(contentItem => {
  observer.observe(contentItem);
});

// -- Remove anchor link in URL when clicked ---

// when the DOM has fully loaded
$(document).ready(() => {
  const anchor = $(".sidenav div");
  // when clicked
  anchor.click(() => {
    setTimeout(() => { removeHash(); }, 10);
  });
})

const removeHash = () => {
  history.replaceState('', document.title, `${window.location.origin}${window.location.pathname}${window.location.search}`);
}