import { createAlert } from './Alert';
import { createContainer } from '../container/Container';

export default {
  title: 'Components/Alert',
  tags: ['!autodocs'],
  decorators: [
    (story, context) => {
      const container = createContainer();
      const row = container.querySelector('.row');
      const column = document.createElement('div');
      const gridColumns = context.args.gridColumns ?? 12;

      column.classList.add(
        'col',
        'col-12-sm',
        `col-${gridColumns}-md`,
      );

      column.appendChild(story());
      row.appendChild(column);

      return container;
    },
  ],
  render: ({
    headingLevel,
    headingContent,
    content,
    option,
  }) => {
    return createAlert({
      headingLevel,
      headingContent,
      content,
      option,
    });
  },
  argTypes: {
    headingLevel: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5'],
    },
    headingContent: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    option: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'danger'],
    },
    gridColumns: {
      name: 'Grid columns',
      control: { type: 'select' },
      options: [12, 8, 6],
      description:
        'Sets the alert width from the medium breakpoint upwards. Alerts remain 12 columns wide on small screens.',
      table: {
        category: 'Layout',
      },
    },
  },
  args: {
    option: 'success',
    gridColumns: 12,
  },
};

export const Success = {
  args: {
    option: 'success',
    headingLevel: 'h2',
    headingContent: 'Thank you!',
    content: `<p>Thank you for submitting your details. If you have any questions please email <a href="mailto:#">example@st-andrews.ac.uk</a>.</p>`,
  },
};

export const Info = {
  args: {
    option: 'info',
    headingLevel: 'h2',
    headingContent: 'Did you know?',
    content: `<p>University of St Andrews was founded over 600 years ago. Find out more about the <a href="#">history of St Andrews</a>.</p>`,
  },
};

export const Warning = {
  args: {
    option: 'warning',
    headingLevel: 'h2',
    headingContent: 'Warning!',
    content: `<p>The deadline for submissions is the end of Semester 2. If you need help, please email <a href="mailto:#">example@st-andrews.ac.uk</a>.</p>`,
  },
};

export const Danger = {
  args: {
    option: 'danger',
    headingLevel: 'h2',
    headingContent: 'Submissions have ended',
    content: `<p>The deadline for submissions has passed. If you need help please email <a href="mailto:#">example@st-andrews.ac.uk</a>.</p>`,
  },
};