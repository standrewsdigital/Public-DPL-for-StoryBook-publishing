import '../../../scss-styles/alert.scss';

export const createAlert = ({
  headingLevel,
  headingContent,
  content,
  option,
}) => {
  const alert = document.createElement('div');
  alert.role = 'alert';
  alert.classList.add('alert', option);

  if (headingLevel && headingContent) {
    const heading = document.createElement(headingLevel);
    heading.innerHTML = headingContent;

    alert.appendChild(heading);
  }

  alert.insertAdjacentHTML('beforeend', content);

  return alert;
};
