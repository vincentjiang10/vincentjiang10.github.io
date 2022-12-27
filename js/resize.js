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

  // Check side effects on modals
  modalPreviewLogic(viewportWidth);
})

// Side effects to modals upon event resize
function modalPreviewLogic(viewportWidth) {
  const modalPreviews = $(".modalPreview");
  modalPreviews.each(function() {
    // Get modal height info
    const mp = $(this);
    const height = parseInt(mp.height());
    const thres = 10;
    console.log("height: " + height);
    // Find auto height
    mp.height("auto");
    const autoHeight = parseInt(mp.height());
    console.log("auto height: " + autoHeight);

    // Toggle overlay
    if (autoHeight > height + thres) {
      // Add overlay
      mp.find('.overlay').addClass('active');
    }
    else {
      // Remove overlay
      mp.find('.overlay').removeClass('active');
    }

    const preview = mp.find('.preview');
    // Toggle `collapse`
    if (viewportWidth <= 750) {
      preview.addClass('collapse')
      preview.find("*").addClass('collapse');
    }
    else {
      preview.removeClass('collapse')
      preview.find("*").removeClass('collapse');
    }

    // Change back to default height 
    height <= 250 && mp.height(height);
  });
  console.log(viewportWidth);
}