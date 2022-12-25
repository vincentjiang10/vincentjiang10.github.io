//-- Collapse sidebar if viewport height is less than 1000px --

$(window).on("load resize", () => {
  let viewportWidth = $(window).width();
  // Minimum width
  if (viewportWidth < 450) viewportWidth = 450;
  const isCollapse = viewportWidth < 1000;
  $(".sidenav").css({
    "width": isCollapse ? "0px" : "250px",
    "opacity": isCollapse ? "0" : "1"
  });
  $(".content").css({
    "width": `${viewportWidth - 400 + (isCollapse ? 250 : 0)}px`,
    "left": `${viewportWidth / 2 - Math.min(1250, viewportWidth - 100) / 2 + (isCollapse ? 0 : 300)}px`
  })
  // Auto height if it is not 250px after resize event
  const modalPreviews = document.querySelectorAll(".modalPreview");
  modalPreviews.forEach(modalPreview => {
    const mp = $(modalPreview);
    const height = parseInt(mp.css("height"));
    console.log("height: " + height);
    console.log("height > 250px: " + (height > "250px"));
    if (height > 250) {
      mp.height("auto");
    } else {

    }
  })
  console.log(viewportWidth);
})