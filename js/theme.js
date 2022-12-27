/**
 * Theme background animation and event logic
 */

// Initialize the mouse position
let mouseX = 0;
let mouseY = 0;

// Flag to track whether the mouse is down or not
let isMouseDown = false;

// Get the element that will be dragged
const theme = document.querySelector('.theme');

// Current Animation
let currentAnimations = [];

// Mouse event snapshot
let snapshot = {
  x: 0,
  y: 0,
  time: 0,
}

// Affects animation attributes of the children of theme
function changeAnimation(callback) {
  // Clear animation
  currentAnimations = [];
  const children = theme.children;
  Array.from(children).forEach(callback);
}

// Pause animation
function pauseAnimation() {
  currentAnimations.forEach((animation) => animation.pause());
}

// Resume animation
function playAnimation() {
  currentAnimations.forEach((animation) => animation.play());
}

// Add initial animation
changeAnimation((child) => {
  const animation = child.animate([
    { backgroundPosition: `0 0` },
    { backgroundPosition: `5000px 0` },
  ], {
    duration: 100000,
    iterations: Infinity,
  });
  currentAnimations.push(animation);
})


// Add event listeners to theme
theme.addEventListener('mouseenter', function() {
  // Change cursor
  theme.style.cursor = "grab";
})
theme.addEventListener('mouseleave', function() {
  // Change cursor
  theme.style.cursor = "pointer";

  // Play animation
  playAnimation();

  // Mouse is down
  isMouseDown = false;
})
theme.addEventListener('mousedown', (event) => {
  // Set the mouse position
  mouseX = event.clientX;
  mouseY = event.clientY;

  // Pause animaiton
  pauseAnimation();

  // Set the flag to true
  handleMouseDown(event);
});
theme.addEventListener('mousemove', (event) => {
  // If mouse is not down
  if (!isMouseDown) return;
  
  // Calculate the difference between the current and previous mouse positions
  let dx = event.clientX - mouseX;
  let dy = event.clientY - mouseY;

  // Update animation
  changeAnimation((child) => {
    const computedStyle = window.getComputedStyle(child);
    const backgroundPosition = computedStyle.getPropertyValue('background-position');

    const [x, y] = backgroundPosition.split(' ').map(value => parseInt(value, 10));
    
    const animation = child.animate([
      { backgroundPosition: `${dx + x}px ${dy + y}px` },
      { backgroundPosition: `${dx + x + 5000}px ${dy + y}px` },
    ], {
      duration: 100000,
      iterations: Infinity,
    });
    currentAnimations.push(animation);
  });

  // Pause animation
  pauseAnimation();

  // Update the mouse position
  mouseX = event.clientX;
  mouseY = event.clientY;
});
theme.addEventListener('mouseup', (event) => {
  // Resume animation
  playAnimation();

  // Set the flag to false
  handleMouseUp(event);
});

// Mouse down and up handlers
function handleMouseDown(event) {
  isMouseDown = true;
  // Snapshot
  snapshot = {
    x: event.clientX,
    y: event.clientY,
    time: event.timeStamp
  }
}
function handleMouseUp(event) {
  isMouseDown = false;
  const {x, y, time} = snapshot;
  const dx = event.clientX - x;
  const dy = event.clientY - y;
  const dt = event.timeStamp - time;

  // Find speed
  const dist = Math.sqrt(dx ** 2 + dy ** 2);
  const speed = Math.min(0.25, dist / dt);

  // Update animation
  changeAnimation((child) => {
    const computedStyle = window.getComputedStyle(child);
    const backgroundPosition = computedStyle.getPropertyValue('background-position');

    const [x, y] = backgroundPosition.split(' ').map(value => parseInt(value, 10));
    
    const animation = child.animate([
      { backgroundPosition: `${x}px ${y}px` },
      { backgroundPosition: `${x + ((5000 * dx / dist) || 0)}px ${y + ((5000 * dy / dist) || 0)}px` },
    ], {
      duration: 5000 / speed,
      iterations: Infinity,
    });
    currentAnimations.push(animation);
  });
}
