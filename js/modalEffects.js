/** 
 * Modal open and close behavior
 * */ 

$(".modalPreview .downArrow").click((e) => {
  handleDownClick($(e.target).parent(), $(e.target));
});

$(".modalPreview .upArrow").click((e) => {
  handleUpClick($(e.target).parent());
});

const cssObj = {
  "opacity": "1",
  "transition": "ease-in 400ms",
  "transition": "opacity ease-in-out 800ms",
};

// Add 30 to 250 (default modal size) due to up arrow
const MODAL_HEIGHT = 280;

// Mouse enter modal logic
$(".modalPreview").mouseenter(function() {
  const mp = $(this);
  const height = mp.height();
  mp.height("auto");
  const autoHeight = mp.height();
  // Set back to original
  mp.height(height);
  height <= MODAL_HEIGHT ? 
    autoHeight > MODAL_HEIGHT && mp.find(".downArrow").css(cssObj) : 
    mp.find(".upArrow").css(cssObj);
});

// Mouse leave modal logic
$(".modalPreview").mouseleave(function() {
  const mp = $(this);
  mp.find(".downArrow").css("opacity", "0");
  mp.find(".upArrow").css("opacity", "0");
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
  // Turn overlay inactive
  parentObj.find(".overlay").addClass("inactive");
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
  // Turn overlay active
  parentObj.find(".overlay").removeClass("inactive");
  $("html, body").animate({
    scrollTop: parentObj.offset().top
  }, "medium");
  setTimeout(() => { downArrowObj.css("display", "block") }, 800);
}