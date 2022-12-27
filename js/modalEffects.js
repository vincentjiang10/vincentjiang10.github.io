/** 
 * Modal open and close behavior
 * */ 

$('.modalPreview .arrow').click(function () {
  $(this).hasClass('up') ? 
    handleUpClick($(this).parent(), $(this)) :
    handleDownClick($(this).parent(), $(this));
});

const cssObj = {
  'opacity': '1',
  'pointer-events': 'all',
  'transition': 'opacity ease-in-out 1000ms',
};

// Mouse enter modal logic
$('.modalPreview').mouseenter(function() {
  const mp = $(this);
  const height = mp.height();
  const thres = 10;
  mp.height('auto');
  const autoHeight = mp.height();
  // Set back to original
  mp.height(height);
  if (autoHeight > height + thres || mp.find('.arrow').hasClass('up')) mp.find('.arrow').css(cssObj);
});

// Mouse leave modal logic
$('.modalPreview').mouseleave(function() {
  const mp = $(this);
  mp.find('.arrow').css('opacity', '0');
});

// Handles down arrow click event on modal
const handleDownClick = (modalPreview, arrow) => {
  // Set modal height to `auto`
  modalPreview.height('auto');
  let height = modalPreview.css('height');
  modalPreview.height('250px');
  modalPreview.height(height);

  // Temporarily disable pointer events for modal
  disablePointerEvents(modalPreview)

  // Change down arrow to up arrow
  arrow.addClass('up');
  const iconClasses = arrow.find('i')[0].classList;
  setTimeout(() => {
    iconClasses.remove('fa-chevron-down');
    iconClasses.add('fa-chevron-up');
  }, 1000);

  // Turn overlay inactive
  modalPreview.find('.overlay').removeClass('active');
}

// Handles up arrow click event on modal
const handleUpClick = (modalPreview, arrow) => {
  // Reset modal height to default
  modalPreview.height('250px');

  // Temporarily disable pointer events for modal
  disablePointerEvents(modalPreview)

  // Change up arrow to down arrow
  arrow.removeClass('up');
  const iconClasses = arrow.find('i')[0].classList;
  setTimeout(() => {
    iconClasses.remove('fa-chevron-up');
    iconClasses.add('fa-chevron-down');
  }, 1000);

  // Turn overlay active
  modalPreview.find('.overlay').addClass('active');
  $('html, body').animate({
    scrollTop: modalPreview.offset().top
  }, 'medium');
}

function disablePointerEvents(modalPreview) {
   // Temporarily disable pointer events
   modalPreview.css('pointer-events', 'none');
   setTimeout(() => {
     modalPreview.css('pointer-events', 'all');
   }, 800);
}