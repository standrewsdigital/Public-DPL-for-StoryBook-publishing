export const createGrid = ({
  gridWidth,
  gridHeight,
  alignment,
  content,
}) => {
  const gridContainer = document.createElement('div');



  gridContainer.classList.add(
    alignment === 'centered' ? 'col-centered' : 'col',
    gridHeight ? `row-${gridHeight}-lg`: '',
    alignment && alignment !== 'centered' ? `${alignment}-col-${gridWidth}-md` : `col-${gridWidth}-lg`
  )

  if (content) {
    gridContainer.appendChild(content);
  }

  return gridContainer;
}
