import { createAccordion } from './Accordion';
import { createContainer } from '../container/Container';

export default {
  title: 'Components/Accordion',
  tags: ['!autodocs'],
  decorators: [
    (story) => {
      const container = createContainer();
      const row = container.querySelector('.row');

      row.appendChild(story());

      return container;
    }
  ],
  render: ({ contentItems, showOpenClose, groupName, headingLevel }) => {
    return createAccordion({ contentItems, showOpenClose, groupName, headingLevel });
  },
  argTypes: {
    contentItems: {
      control: 'object',
      description: `Create a new accordion by clicking the plus (+) icon next to contentItems under 'Control' on the right. Then enter \`{}\` as the value.

Open the new entry, click the plus icon and enter \`heading\` and \`htmlContent\` as the keys and the relevant values.
      `
    },
    groupName: {
      control: 'text',
      description: 'The can be omitted for single accordions, but for accordion groups, each group needs to have a unique name.'
    },
    headingLevel: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
    },
  },
  args: {
    contentItems: [
      {
        heading: 'Divinity',
        htmlContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac rutrum tellus, quis porttitor urna. Donec ultricies libero erat, id efficitur risus blandit nec. Donec et ipsum in dui blandit rutrum. Praesent rhoncus lobortis ligula, viverra tincidunt ante lobortis at. Sed vehicula luctus quam sit amet lacinia. Sed eu nulla vel ex tempus accumsan in sit amet metus. Vestibulum a venenatis mi. Ut ac semper arcu.`
      },
      {
        heading: 'Geography',
        htmlContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac rutrum tellus, quis porttitor urna. Donec ultricies libero erat, id efficitur risus blandit nec. Donec et ipsum in dui blandit rutrum. Praesent rhoncus lobortis ligula, viverra tincidunt ante lobortis at. Sed vehicula luctus quam sit amet lacinia. Sed eu nulla vel ex tempus accumsan in sit amet metus. Vestibulum a venenatis mi. Ut ac semper arcu.`
      },
      {
        heading: 'History',
        htmlContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac rutrum tellus, quis porttitor urna. Donec ultricies libero erat, id efficitur risus blandit nec. Donec et ipsum in dui blandit rutrum. Praesent rhoncus lobortis ligula, viverra tincidunt ante lobortis at. Sed vehicula luctus quam sit amet lacinia. Sed eu nulla vel ex tempus accumsan in sit amet metus. Vestibulum a venenatis mi. Ut ac semper arcu.`
      }
    ]
  }
}

export const Single = {
  args: {
    contentItems: [{
      heading: "Single accordion",
      htmlContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac rutrum tellus, quis porttitor urna. Donec ultricies libero erat, id efficitur risus blandit nec. Donec et ipsum in dui blandit rutrum. Praesent rhoncus lobortis ligula, viverra tincidunt ante lobortis at. Sed vehicula luctus quam sit amet lacinia. Sed eu nulla vel ex tempus accumsan in sit amet metus. Vestibulum a venenatis mi. Ut ac semper arcu.`
    }],
    headingLevel: 'h3'
  }
}

export const Group = {
  args: {
    groupName: "accordion-group",
    headingLevel: "h3",
  }
}
