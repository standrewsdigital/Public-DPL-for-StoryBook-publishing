import { createAlert } from './Alert';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
  render: ({ headingLevel, headingContent, content, ...args }) => {
//     return `<div class="alert ${args.option}" role="alert">
//   <${headingLevel}>${headingContent}</${headingLevel}>
//   ${content}
// </div>`;

    return createAlert({ headingLevel, headingContent, content, ...args });

  },
  argTypes: {
    headingLevel: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5'],
    },
    headingContent: { control: 'text' },
    content: { control: 'text' },
    option: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'danger'],
    },
  },
  args: {
    option: 'success',
  }
}

export const Success = {
  args: {
    option: 'success',
    headingLevel: 'h2',
    headingContent: 'Thank you!',
    content: `<p>Thank you for submitting your details. If you have any questions please email <a href="mailto:#">example@st-andrews.ac.uk</a>.</p>`
  }
}

export const Info = {
  args: {
    option: 'info',
    headingLevel: 'h2',
    headingContent: 'Did you know?',
    content: `<p>University of St Andrews was founded over 600 years ago. Find out more about the <a href='#'>history of St Andrews</a>.</p>`
  }
}

export const Warning = {
  args: {
    option: 'warning',
    headingLevel: 'h2',
    headingContent: 'Warning!',
    content: `<p>The deadline for submissions is the end of Semester 2. If you need help, please email <a href='mailto:#'>example@st-andrews.ac.uk</a>.</p>`
  }
}

export const Danger = {
  args: {
    option: 'danger',
    headingLevel: 'h2',
    headingContent: 'Submissions have ended',
    content: `<p>The deadline for submissions has passed. If you need help please email <a href='mailto:#'>example@st-andrews.ac.uk</a>.</p>`
  }
}
