import { createButton } from './Button';
import '../../../scripts/dropdown-button.js';

const colours = ['Blue', 'Red', 'Orange', 'Green', 'Burgundy', 'Grey', 'Purple', 'White'];

function renderAllColours(args) {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.gap = '1rem';

  colours.forEach((colour) => {
    wrapper.appendChild(createButton({ ...args, colour, label: colour }));
  })
  return wrapper;
}

export default {
  title: 'Components/Button',
  tags: ['!autodocs'],
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
      options: colours
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
    size: 'Regular',
    colour: 'Blue',
    label: 'Click me!',
    cornerShape: 'Square'
  }
}

export const PrimaryLarge = {
  args: {
    ...Primary.args,
    size: 'Large',
  }
}

export const PrimaryColours = {
  render: renderAllColours,
  args: {
    ...Primary.args
  },
  tags: ['!dev']
}

export const Action = {
  args: {
    ...Primary.args,
    type: 'Action',
  }
}

export const ActionLarge = {
  args: {
    ...Action.args,
    size: 'Large',
  }
}

export const ActionSecondary = {
  args: {
    ...ActionLarge.args,
    colour: 'White',
  }
}

export const ActionColours = {
  render: renderAllColours,
  args: {
    ...Action.args
  },
  tags: ['!dev']
}

export const Dropdown = {
  args: {
    ...Primary.args,
    type: 'Dropdown',
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
}
export const DropdownLarge = {
  args: {
    ...Dropdown.args,
    size: 'Large',
  },
  parameters: {
    ...Dropdown.parameters
  }
}

export const DropdownColours = {
  render: renderAllColours,
  args: {
    ...Dropdown.args
  },
  tags: ['!dev'],
  parameters: {
    ...Dropdown.parameters
  }
}
