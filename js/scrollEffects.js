/**
 * Scrolling animation
 */

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

// Set observer to observe each contentItem header
contentItemHeaders.forEach(contentItemHeader => {
  observer.observe(contentItemHeader);
});

// Set observer to obserce each contentItem bodyText
contentItemBodyTexts.forEach(contentItemBodyText => {
  observer.observe(contentItemBodyText);
})

// Set observer to observe each modalPreview
modalPreviews.forEach(modalPreview => {
  observer.observe(modalPreview);
});

// Highlight navbar items on scroll
$(window).scroll(function() {
  let currentId = "";
  $('.content section').each(function() {
    const sectionTop = $(this).offset().top;
    const sectionHeight = $(this).outerHeight();
    if ($(window).scrollTop() >= sectionTop - (sectionHeight / 3)) {
      currentId = $(this).attr('id');
    }
  });

  $('#nav-items a').each(function() {
    $(this).removeClass('active');
    if ($(this).hasClass(currentId)) {
      $(this).addClass('active');
    }
  });
});

// When the DOM has fully loaded
$(document).ready(() => {
  //-- Remove anchor link in URL when clicked --
  const anchor = $(".sidenav div");
  // When clicked
  anchor.click(() => {
    setTimeout(() => { removeHash(); }, 0);
  });
  //-- Reset to top of screen on reload --
  history.scrollRestoration = "manual";
  $(window).on('beforeunload', () => {
    $(window).animate({
      scrollTop: 0
    }, "medium");
  });
});

const removeHash = () => {
  history.replaceState("", document.title, `${window.location.origin}${window.location.pathname}${window.location.search}`);
}