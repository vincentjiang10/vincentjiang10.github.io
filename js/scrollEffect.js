const contentItems = document.querySelector(".contentItem");

/*
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    emtry.target.classList.toggle("show", entry.isIntersecting);
  });
});

contentItems.forEach(contentItem => {
  observer.observe(contentItem);
})*/

const observer = new IntersectionObserver(entries => {
  console.log(entries);
})

observer.observe(contentItems[0]);