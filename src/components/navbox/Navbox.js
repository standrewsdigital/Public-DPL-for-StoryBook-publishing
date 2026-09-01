import '../../../scss-styles/navbox.scss';

export const createNavbox = ({
  image,
  altText,
  url,
  title,
  content,
  columns
}) => {
  let columnClass = '';
  switch (columns) {
    case 1:
      columnClass = 'col-12-md';
      break;
    case 2:
      columnClass = 'col-6-md';
      break;
    case 3:
      columnClass = 'col-4-md';
      break;
    default:
      break;
  }


  const wrapper = document.createElement('div');
  wrapper.classList.add('col', 'col-12-xs');
  if (columnClass) {
    wrapper.classList.add(columnClass);
  }

  const navbox = document.createElement('a');
  navbox.classList.add('navbox', 'bg-white');
  navbox.setAttribute('href', url);

  if (image) {
    navbox.classList.add('navbox--has-image');
    const navboxImageWrapper = document.createElement('div');
    navboxImageWrapper.classList.add('navbox-image');

    const navboxImage = document.createElement('img');
    navboxImage.src = image;
    navboxImage.alt = altText;

    navboxImageWrapper.appendChild(navboxImage);
    navbox.appendChild(navboxImageWrapper);
  }

  const navboxTitle = document.createElement('div');
  navboxTitle.classList.add('navbox-title', 'text-white', 'bg-blue-primary');

  const titleText = document.createElement('span');
  titleText.classList.add('navbox-title-text');
  titleText.innerText = title;
  navboxTitle.appendChild(titleText);

  const titleIcon = document.createElement('span');
  titleIcon.classList.add('material-icons-outlined', 'navbox-chevron');
  titleIcon.setAttribute('aria-hidden', 'true');
  titleIcon.innerText = 'chevron_right';
  navboxTitle.appendChild(titleIcon);

  navbox.appendChild(navboxTitle);
  wrapper.appendChild(navbox);

  if (content) {
    const navboxContent = document.createElement('div');
    navboxContent.classList.add('navbox-content');
    navboxContent.innerHTML = content;
    wrapper.appendChild(navboxContent);
  }

  // row.appendChild(wrapper);

  return wrapper;
};
