import { createButton } from './Button';
import '../../../scripts/dropdown-button.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ colour, label, size, type, cornerShape, linkList }) => {
    return createButton({ colour, label, size, type, cornerShape, linkList });
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
    linkList: {
      control: 'object',
      if: { arg: 'type', eq: 'Dropdown' },
    }
  },
  args: {
    linkList: [
      {
        'label': 'Link 1',
        'url': '#'
      },
       {
        'label': 'Link 2',
        'url': '#'
      },
       {
        'label': 'Link 3',
        'url': '#'
      },
    ]
  }
}

export const Primary = {
  args: {
    type: 'Primary',
    size: 'Large',
    colour: 'Blue',
    label: 'Click me!',
    cornerShape: 'Square'
  }
}

export const Dropdown = {
  args: {
    type: 'Dropdown',
    size: 'Large',
    cornerShape: 'Square',
    label: 'Click me!'
  }
}
