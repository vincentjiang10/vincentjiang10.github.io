//-- Collapse sidebar if viewport height is less than 1000px --

$(window).on("load resize", () => {
  const viewportWidth = $(window).width();
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

  // Check side effects on modals
  modalPreviewLogic(viewportWidth);
})

// Side effects to modals upon event resize
function modalPreviewLogic(viewportWidth) {
  const modalPreviews = document.querySelectorAll(".modalPreview");
  modalPreviews.forEach(modalPreview => {
    const mp = $(modalPreview);
    const height = parseInt(mp.height());
    console.log("height: " + height);
    // Find auto height
    mp.height("auto");
    const autoHeight = parseInt(mp.height());
    console.log("auto height: " + autoHeight);

    if (autoHeight <= 250) {
      // Remove arrows, if any
    }
    else {
      // Add arrows, if none
    }

    if (height <= 250) {
      // Change back to default height 
      mp.height(height);
      
    }
    else {

    }
    
  })
  console.log(viewportWidth);
}