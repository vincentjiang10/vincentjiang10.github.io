// Create a modal preview
function createModalPreview({
  imgSrc, 
  logoStyle, 
  logoRef, // Add class="logoRef"
  imgStyle,
  head, 
  subHead1, 
  subHead2, 
  bodyText,
  more = false}) {
  // Create the outer `div` element
  const modalPreview = document.createElement('div');
  modalPreview.classList.add('modalPreview');

  // Create the inner `div` elements
  const preview = document.createElement('div');
  preview.classList.add('preview');

  // Default element has opaque child element
  const overlay = document.createElement('div');
  overlay.classList.add('overlay')

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');

  // Create the `logo` and `img` elements
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.style = logoStyle;

  const img = document.createElement('img');
  img.src = `assets/images/${imgSrc}`;
  img.style = imgStyle;

  logo.appendChild(img);
  div1.appendChild(logo);

  // Create the `heading`, `subHeading`, and `text` elements
  const heading = document.createElement('div');
  heading.classList.add('heading');
  heading.textContent = head;

  const subHeading1 = document.createElement('div');
  subHeading1.classList.add('subHeading');
  subHeading1.style.color = 'royalblue';
  subHeading1.textContent = subHead1

  const subHeading2 = document.createElement('div');
  subHeading2.classList.add('subHeading');
  subHeading2.style.color = 'black';
  subHeading2.innerHTML = subHead2

  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = bodyText;

  div2.appendChild(heading);
  div2.appendChild(subHeading1);
  div2.appendChild(subHeading2);
  div2.appendChild(text);

  // Append all elements to the `preview` element
  preview.appendChild(overlay);
  preview.appendChild(div1);
  preview.appendChild(div2);

  // Append the `preview` element to the `modalPreview` element
  modalPreview.appendChild(preview);

  return modalPreview;
}

// TODO: Add arrows to modal if it currently has none (Will be used by addModalPreview if {initialArrows} = params
// May be called on by resize event
function addArrows(id) {
  
}

// Remove arrows to modal if it currently has arrows
// May be called on by resize event
function removeArrows(id) {

}

// Add modal preview to parent element with id = [id]
function addModalPreview({id, ...params}) {
  // Call the createModalPreview function
  const modalPreview = createModalPreview(params);

  // Get the element with id of [id]
  const container = document.getElementById(id);

  // Append the modal preview element to the container element
  container.appendChild(modalPreview);
}