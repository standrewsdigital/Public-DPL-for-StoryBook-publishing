export const createIcon = ({
  name,
  colour,
  size
}) => {
  const icon = document.createElement('span');
  const iconClass = colour !== 'blue' ? `icon-${name}-${colour}` : `icon-${name}`;
  icon.classList.add('icon', `icon-${size}`, iconClass);

  return icon;
};
