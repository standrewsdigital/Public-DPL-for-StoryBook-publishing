import '../../../scss-styles/accordion.scss';

export const createAccordion = ({
  contentItems,
  showOpenClose,
  groupName,
  headingLevel,
}) => {
  const accordionWrapper = document.createElement('div');
  accordionWrapper.classList.add('col', 'col-12-md', 'col-12-sm');
  const accordionGroup = document.createElement('div');
  accordionGroup.classList.add('accordion-group');

  contentItems.forEach((item) => {
    accordionGroup.appendChild(createDetails(item, groupName, headingLevel));
  });

  accordionWrapper.appendChild(accordionGroup);

  return accordionWrapper;
}

function createDetails({heading, htmlContent}, name, headingLevel) {
  const details = document.createElement('details');

  if (name) details.name = name;

  const summary = document.createElement('summary');

  if (headingLevel) {
    const headingTag = document.createElement(headingLevel);
    headingTag.innerText = heading;
    summary.appendChild(headingTag);
  } else {
    summary.innerText = heading;
  }

  const detailsContent = document.createElement('div');
  detailsContent.classList.add('accordion-content');
  detailsContent.innerHTML = htmlContent;
  details.append(summary, detailsContent);

  return details;
}
