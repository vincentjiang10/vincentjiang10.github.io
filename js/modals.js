// Create a modal preview
function createModalPreview({
  imgSrc, 
  logoStyle, 
  logoRef, // Add class="logoRef" // Add element <a> if defined
  imgStyle,
  head, 
  subHead1, 
  subHead2, 
  bodyText,
  more = false}) {
  // Create the outer `div` element
  const modalPreview = document.createElement('div');
  modalPreview.classList.add('modalPreview');

  // Default element has opaque child element
  const overlay = document.createElement('div');
  overlay.classList.add('overlay')

  // Create the inner `div` elements
  const preview = document.createElement('div');
  preview.classList.add('preview');

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

  // Append `div1` and `div2` elements to the `preview` element
  preview.appendChild(div1);
  preview.appendChild(div2);

  //-- Arrow elements --
  // Create the down arrow element
  const downArrow = document.createElement('div');
  downArrow.className = 'downArrow';
  const downArrowIcon = document.createElement('i');
  downArrowIcon.className = 'fa fa-chevron-down';
  downArrowIcon.setAttribute('aria-hidden', 'true');
  downArrow.appendChild(downArrowIcon);

  // Create the up arrow element
  const upArrow = document.createElement('div');
  upArrow.className = 'upArrow';
  const upArrowIcon = document.createElement('i');
  upArrowIcon.className = 'fa fa-chevron-up';
  upArrowIcon.setAttribute('aria-hidden', 'true');
  upArrow.appendChild(upArrowIcon);

  // Append elements to the `modalPreview` element
  modalPreview.appendChild(overlay);
  modalPreview.appendChild(preview);
  modalPreview.appendChild(downArrow);
  modalPreview.appendChild(upArrow);
  
  return modalPreview;
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