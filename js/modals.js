// Create a modal preview
function addModalPreview({
  id,
  imgSrc, 
  logoStyle, 
  logoRef, // Add class="logoRef" // Add element <a> if defined
  imgStyle,
  head, 
  subHead1, 
  subHead2, 
  buttons,
  bodyText}) {
  // Get modal by `id`
  const modalPreview =  document.getElementById(id);

  // Default element has opaque child element
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Preview container
  const preview = document.createElement('div');
  preview.classList.add('preview');

  // Create the inner `div` elements
  const div1 = document.createElement('div');
  div1.classList.add('logoRef');
  const div2 = document.createElement('div');

  // Create the `logo` and `img` elements
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.style = logoStyle;

  const logoImg = document.createElement('img');
  logoImg.src = `assets/images/${imgSrc}`;
  logoImg.style = imgStyle;

  logo.appendChild(logoImg);

  if (logoRef) {
    const logoLink = document.createElement('a');
    logoLink.href = logoRef;
    logoLink.target = '_blank';
    logoLink.appendChild(logo);
    div1.appendChild(logoLink);
  }
  else {
    div1.appendChild(logo);
  }

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
  subHeading2.innerHTML = subHead2;

  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = bodyText;

  div2.appendChild(heading);
  div2.appendChild(subHeading1);
  div2.appendChild(subHeading2);
  div2.appendChild(text);
  // Add buttons
  buttons && div2.appendChild(createButtons(buttons));

  // Append `div1` and `div2` elements to the `preview` element
  preview.appendChild(div1);
  preview.appendChild(div2);

  // Create the arrow element
  const arrow = document.createElement('div');
  arrow.className = 'arrow';
  const arrowIcon = document.createElement('i');
  arrowIcon.className = 'fa fa-chevron-down';
  arrowIcon.setAttribute('aria-hidden', 'true');
  arrow.appendChild(arrowIcon);

  // Append elements to the `modalPreview` element
  modalPreview.appendChild(overlay);
  modalPreview.appendChild(preview);
  modalPreview.appendChild(arrow);
  
  return modalPreview;
}

// Creates buttons
function createButtons(buttonData) {
  // Create the buttons container element
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons");

  // Iterate through the button data array
  for (const {href, icon} of buttonData) {
    // Create the button element
    const buttonElement = document.createElement("a");
    buttonElement.classList.add("button");
    buttonElement.href = href;
    buttonElement.target = "_blank";

    // Create the button icon element
    const iconElement = document.createElement("i");
    iconElement.classList.add("fa");
    iconElement.classList.add(icon);
    iconElement.setAttribute("aria-hidden", "true");

    // Add the icon element to the button element
    buttonElement.appendChild(iconElement);

    // Add the button element to the buttons container
    buttonsContainer.appendChild(buttonElement);
  }

  return buttonsContainer;
}