export const createHeader = () => {
  const header = document.createElement('header');

  const container = document.createElement('div');
  container.classList.add('container');
  header.appendChild(container);

  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  const columns = document.createElement('div');
  columns.classList.add("col", "col-12-lg", "col-12-xxs");
  row.appendChild(columns);

  const headerContent = document.createElement('div');
  headerContent.classList.add('header-content');

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = "https://design.st-andrews.ac.uk/assets/images/university-of-st-andrews-logo-foundation.svg";
  logo.alt = 'University of St Andrews Logo';

  headerContent.appendChild(logo);
  columns.appendChild(headerContent);

  return header;
};
