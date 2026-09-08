export const createButton = ({
  colour = 'blue',
  label,
  type = 'Primary',
  size = 'Regular',
  cornerShape = 'Square',
  linkList
}) => {

  let button = document.createElement('button');

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

  switch (type) {
    case 'Action':
      button.classList.add('action');
      break;
    case 'Dropdown':
      button = createDropdownButton( button, linkList );
      break;
    case 'Primary':
    default:
      break;
  }

  return button;
};

function createDropdownButton( button, linkListArray ) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('hover-drop-list', 'down');

  button.dataset.toggle = 'drop';
  button.setAttribute('aria-haspopup', "true");
  button.setAttribute('aria-expanded', "false");
  dropdown.appendChild(button);

  if (linkListArray.length > 0) {
    const linkList = document.createElement('ul');
    linkList.classList.add('drop-content');

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
