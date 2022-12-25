/**
 * Theme background animation and event logic
 */

// Initialize the position of the background image
let x = 0;

// Initialize the mouse position
let mouseX = 0;

// Flag to track whether the mouse is down or not
let isMouseDown = false;

// Get the element that will be dragged
const theme = document.querySelector('.theme');

// Affects animtion attributes of the children of theme
function changeAnimation(callback) {
  const children = theme.children;
  Array.from(children).forEach(callback);
}

// Add initial animation
changeAnimation((child) => {
  child.animate([
    { backgroundPosition: `${x}px 0` },
    { backgroundPosition: `${x + 500}px 0` },
  ], {
    duration: 10000,
    iterations: Infinity
  })
});

// Change cursor 
theme.addEventListener('mouseenter', function () {
  theme.style.cursor = 'grab';
});

theme.addEventListener('mouseleave', function () {
  theme.style.cursor = 'pointer';
});

// Add event listeners to `theme`
theme.addEventListener('mousedown', (event) => {
  // Set the mouse position
  mouseX = event.clientX;

  // Set the flag to true
  isMouseDown = true;
});
theme.addEventListener('mousemove', (event) => {
  // Check if the mouse is down
  if (isMouseDown) {
    // Calculate the difference between the current and previous mouse positions
    const dx = event.clientX - mouseX;

    // Update the position of the background image
    x += dx;

    // Update animation
    changeAnimation((child) => {
      child.animate([
        { backgroundPosition: `${x}px 0` },
        { backgroundPosition: `${x + 5000}px 0` },
      ], {
        duration: 100000,
        iterations: Infinity
      })
    });

    // Update the mouse position
    mouseX = event.clientX;
  }
});
theme.addEventListener('mouseup', function () {
  // Set the flag to false
  isMouseDown = false;
});
