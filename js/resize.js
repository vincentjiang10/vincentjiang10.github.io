//-- Collapse sidebar if viewport height is less than 1000px --

$(window).on("load resize", () => {
  const viewportWidth = $(window).width();
  const isCollapse = viewportWidth < 1000;
  $(".sidenav").css({
    "width": isCollapse ? "0px" : "250px",
    "opacity": isCollapse ? "0" : "1"
  });
  $(".content").css({
    "width": `${viewportWidth - 400 + (isCollapse ? 250 : 0)}px`,
    "left": `${viewportWidth / 2 - Math.min(1250, viewportWidth - 100) / 2 + (isCollapse ? 0 : 300)}px`
  })
  const modalPreviews = document.querySelectorAll(".modalPreview");
  modalPreviews.forEach(modalPreview => {
    const height = $(modalPreview).css("height");
    height !== "250px" && $(modalPreview).height("auto");
  })
})