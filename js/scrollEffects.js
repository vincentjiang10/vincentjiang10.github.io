//-- Scrolling animation ---
const contentItemHeaders = document.querySelectorAll(".contentItem .header");
const contentItemBodyTexts = document.querySelectorAll(".contentItem .body .bodyText");
const modalPreviews = document.querySelectorAll(".body .modalPreview");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.1,
});

// set observer to observe each contentItem header
contentItemHeaders.forEach(contentItemHeader => {
  observer.observe(contentItemHeader);
});

// set observer to obserce each contentItem bodyText
contentItemBodyTexts.forEach(contentItemBodyText => {
  observer.observe(contentItemBodyText);
})

// set observer to observe each modalPreview
modalPreviews.forEach(modalPreview => {
  observer.observe(modalPreview);
});

// when the DOM has fully loaded
$(document).ready(() => {
  //-- Remove anchor link in URL when clicked --
  const anchor = $(".sidenav div");
  // when clicked
  anchor.click(() => {
    setTimeout(() => { removeHash(); }, 0);
  });
})

const removeHash = () => {
  history.replaceState("", document.title, `${window.location.origin}${window.location.pathname}${window.location.search}`);
}