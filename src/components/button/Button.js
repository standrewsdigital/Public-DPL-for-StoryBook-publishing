export const createButton = ({
  colour = 'blue',
  label,
  type = 'Primary',
  size = 'Regular',
  cornerShape = 'Square',
}) => {

  const button = document.createElement('button');

  switch (type) {
    case 'Action':
      button.classList.add('action');
      break;
    case 'Primary':
    default:
      break;
  }

  switch (size) {
    case 'Large':
      button.classList.add('lg');
      break;
    case 'Regular':
    default:
      break;
  }

  switch (cornerShape) {
    case "Round - Small":
      button.classList.add('radius-sm');
      break;
    case "Round - Medium":
      button.classList.add('radius-md');
      break;
    case "Round - Large":
      button.classList.add('radius-lg');
      break;
    case "Round - Extra large":
      button.classList.add('radius-xl');
      break;
    case 'Square':
    default:
      break;
  }

  button.type = 'button';
  button.innerText = label;
  button.classList.add('btn');
  button.classList.add(colour.toLowerCase());

  return button;
};
