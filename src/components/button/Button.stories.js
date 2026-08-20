import { createButton } from './Button';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ colour, label }) => {
    return createButton({ colour, label });
  },
  argTypes: {
    colour: {
      control: { type: 'select' },
      options: ['blue', 'red', 'orange', 'green', 'burgundy', 'grey', 'purple', 'white']
    },
    label: { control: 'text' }
  }
}

export const Primary = {
  args: {
    colour: 'blue',
    label: 'Click me!'
  }
}
