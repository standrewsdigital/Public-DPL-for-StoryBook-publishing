export const createFooter = () => {
  const footer = document.createElement('footer');

  const container = document.createElement('div');
  container.classList.add('container');
  footer.appendChild(container);

  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  const columns = document.createElement('div');
  columns.classList.add("col", "col-12-lg", "col-12-xxs");
  row.appendChild(columns);

  const footerText = document.createElement('div');
  footerText.classList.add('footer-text');
  footerText.innerText = "© 2026 The University of St Andrews is a charity registered in Scotland, No: SC013532"
  columns.appendChild(footerText);

  const footerLinks = document.createElement('div');
  footerLinks.classList.add('footer-links');
  footerLinks.insertAdjacentHTML(
    'afterbegin',
    `<a href="/cookie-preferences">Cookie preferences</a>
    <a href="/accessibility-statement">Accessibility statement</a>
    <a href="/terms-and-conditions">Terms and conditions</a>
    <a href="/website-help">Website help</a>`
  );
  columns.appendChild(footerLinks);

  return footer;
}
