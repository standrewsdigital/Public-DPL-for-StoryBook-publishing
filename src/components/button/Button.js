export const createButton = ({
  colour = 'blue',
  label,
  type = 'Primary',
  size = 'Regular',
  cornerShape = 'Square',
  linkList
}) => {

  let button = document.createElement('button');
  let cornerShapeClass = "";

  button.type = 'button';
  button.innerText = label;
  button.classList.add('btn');
  button.classList.add(colour.toLowerCase());

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
      cornerShapeClass = 'radius-sm';
      break;
    case "Round - Medium":
      cornerShapeClass = 'radius-md'
      break;
    case "Round - Large":
      cornerShapeClass = 'radius-lg'
      break;
    case "Round - Extra large":
      cornerShapeClass = 'radius-xl'
      break;
    case 'Square':
    default:
      break;
  }

  if (cornerShapeClass !== "") button.classList.add(cornerShapeClass);

  switch (type) {
    case 'Action':
      button.classList.add('action');
      break;
    case 'Dropdown':
      button = createDropdownButton( button, linkList, cornerShapeClass );
      break;
    case 'Primary':
    default:
      break;
  }

  return button;
};

function createDropdownButton( button, linkListArray, cornerShapeClass ) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('hover-drop-list', 'down');

  button.dataset.toggle = 'drop';
  button.setAttribute('aria-haspopup', "true");
  button.setAttribute('aria-expanded', "false");
  dropdown.appendChild(button);

  if (linkListArray.length > 0) {
    const linkList = document.createElement('ul');
    linkList.classList.add('drop-content');

    if (cornerShapeClass !== "") linkList.classList.add(cornerShapeClass);

    linkListArray.forEach(({ url, label }) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.innerText = label;
      listItem.appendChild(link);
      linkList.appendChild(listItem);
    });

    dropdown.appendChild(linkList);
  }

  return dropdown;
}
