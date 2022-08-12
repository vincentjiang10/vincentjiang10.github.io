//-- Modal open and close behavior --

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

// handles down arrow click event on modal
const handleDownClick = (parentObj, currentObj) => {
  if (!parentObj.hasClass("modalPreview")) {
    currentObj = parentObj;
    parentObj = parentObj.parent();
  }
  parentObj.height("auto");
  let height = parentObj.css("height");
  parentObj.height("250px");
  parentObj.height(height);
  // hide down arrow
  parentObj.css("pointer-events", "none");
  currentObj.css({
    "opacity": "0",
    "height": `${parseInt(height) - 250 + 32}px`
  });
  setTimeout(() => {
    currentObj.css("display", "none");
    parentObj.css("pointer-events", "all");
  }, 800);
  // reveal up arrow
  setTimeout(() => {
    parentObj.find(".upArrow").css("opacity", "1");
  }, 100);
}

// handles up arrow click event on modal
const handleUpClick = (parentObj) => {
  if (!parentObj.hasClass("modalPreview")) {
    currentObj = parentObj;
    parentObj = parentObj.parent();
  }
  parentObj.height("250px");
  // show down arrow
  const downArrowObj = parentObj.find(".downArrow");
  downArrowObj.css({
    "height": "32px"
  });
  setTimeout(() => { downArrowObj.css("display", "block") }, 800);
  let position = parentObj.offset().top;
  window.scrollTo(0, position);
}