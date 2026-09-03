import { createButton } from './Button';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ colour, label, size, type, cornerShape }) => {
    return createButton({ colour, label, size, type, cornerShape });
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Primary', 'Action', 'Dropdown']
    },
    size: {
      control: { type: 'select' },
      options: ['Regular', 'Large']
    },
    colour: {
      control: { type: 'select' },
      options: ['Blue', 'Red', 'Orange', 'Green', 'Burgundy', 'Grey', 'Purple', 'White']
    },
    label: { control: 'text' },
    cornerShape: {
      control: { type: 'select' },
      options: ['Square', 'Round - Small', 'Round - Medium', 'Round - Large', 'Round - Extra large']
    },
  }
}

export const Primary = {
  args: {
    type: 'primary',
    size: 'Large',
    colour: 'Blue',
    label: 'Click me!',
    cornerShape: 'Square'
  }
}
