// Modal open and close behavior

$(".modalPreview .downArrow").click((e) => {
  handleDownClick($(e.target).parent(), $(e.target));
});

$(".modalPreview .upArrow").click((e) => {
  handleUpClick($(e.target).parent());
});

const cssObj = {
  "opacity": "1",
  "transition": "ease-in 400ms",
  "transition": "opacity ease-in-out 800ms"
};

$(".modalPreview").mouseenter((e) => {
  const obj = $(e.target);
  if (obj.css("height") === "250px" || obj.parent().css("height") === "250px") {
    obj.find(".downArrow").css(cssObj);
    obj.hasClass("downArrow") && obj.css(cssObj);
  }
  else {
    obj.find(".upArrow").css(cssObj);
    obj.hasClass("upArrow") && obj.css(cssObj);
  }
});

$(".modalPreview").mouseleave((e) => {
  const obj = $(e.target);
  obj.find(".downArrow").css("opacity", "0");
  obj.parent().find(".downArrow").css("opacity", "0");
  obj.find(".upArrow").css("opacity", "0");
  obj.parent().find(".upArrow").css("opacity", "0");
});

// Handles down arrow click event on modal
const handleDownClick = (parentObj, currentObj) => {
  if (!parentObj.hasClass("modalPreview")) {
    currentObj = parentObj;
    parentObj = parentObj.parent();
  }
  parentObj.height("auto");
  let height = parentObj.css("height");
  parentObj.height("250px");
  parentObj.height(height);
  // Hide down arrow
  parentObj.css("pointer-events", "none");
  currentObj.css({
    "opacity": "0",
    "height": `${parseInt(height) - 250 + 32}px`
  });
  setTimeout(() => {
    currentObj.css("display", "none");
    parentObj.css("pointer-events", "all");
  }, 800);
  // Reveal up arrow
  setTimeout(() => {
    parentObj.find(".upArrow").css("opacity", "1");
  }, 100);
}

// Handles up arrow click event on modal
const handleUpClick = (parentObj) => {
  if (!parentObj.hasClass("modalPreview")) {
    currentObj = parentObj;
    parentObj = parentObj.parent();
  }
  parentObj.height("250px");
  // Show down arrow
  const downArrowObj = parentObj.find(".downArrow");
  downArrowObj.css({
    "height": "32px"
  });
  console.log(parentObj.offset().top);
  $("html, body").animate({
    scrollTop: parentObj.offset().top
  }, "medium");
  setTimeout(() => { downArrowObj.css("display", "block") }, 800);
}

// Create a modal preview
function createModalPreview() {
  // Create the outer `div` element
  const modalPreview = document.createElement('div');
  modalPreview.classList.add('modalPreview');

  // Create the inner `div` elements
  const preview = document.createElement('div');
  preview.classList.add('preview');

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');

  // Create the `logo` and `img` elements
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.style.background = 'radial-gradient(rgb(239, 124, 124), royalblue)';

  const img = document.createElement('img');
  img.src = 'assets/images/cup-robotics.jpeg';
  img.style.boxShadow = '0px 0px 20px rgb(249, 77, 77)';

  logo.appendChild(img);
  div1.appendChild(logo);

  // Create the `heading`, `subHeading`, and `text` elements
  const heading = document.createElement('div');
  heading.classList.add('heading');
  heading.textContent = 'Cornell Cup Robotics';

  const subHeading1 = document.createElement('div');
  subHeading1.classList.add('subHeading');
  subHeading1.style.color = 'royalblue';
  subHeading1.textContent = 'Software Engineer';

  const subHeading2 = document.createElement('div');
  subHeading2.classList.add('subHeading');
  subHeading2.style.color = 'black';
  subHeading2.innerHTML = 'February 2022 &#8212; Present';

  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = 'Translate user speech inputs into text using machine learning and natural language processing as part of the CS Chatbot team.';

  div2.appendChild(heading);
  div2.appendChild(subHeading1);
  div2.appendChild(subHeading2);
  div2.appendChild(text);

  // Append all elements to the `preview` element
  preview.appendChild(div1);
  preview.appendChild(div2);

  // Append the `preview` element to the `modalPreview` element
  modalPreview.appendChild(preview);

  return modalPreview;
}
