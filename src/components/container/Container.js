export const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  return container;
}
