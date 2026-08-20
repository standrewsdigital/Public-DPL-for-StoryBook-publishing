export const createButton = ({
  colour,
  label,
}) => {
  colour = colour === 'blue' ? '' : colour;

  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = label;
  button.classList.add('btn');
  if (colour) {
    button.classList.add(colour);
  }

  return button;
};
