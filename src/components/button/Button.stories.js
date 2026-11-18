import { createButton } from './Button';
import '../../../scripts/dropdown-button.js';

const colours = ['Blue', 'Red', 'Orange', 'Green', 'Burgundy', 'Grey', 'Purple', 'White'];
const cornerShapes = ['Square', 'Round - Small', 'Round - Medium', 'Round - Large', 'Round - Extra large'];

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

function renderAllCorners(args) {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.gap = '1rem';

  cornerShapes.forEach((cornerShape) => {
    wrapper.appendChild(createButton({ ...args, cornerShape, label: cornerShape }));
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
      options: cornerShapes
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

export const PrimaryRounded = {
  render: renderAllCorners,
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


export const ActionRounded = {
  render: renderAllCorners,
  args: {
    ...Action.args
  },
  tags: ['!dev']
}

export const Dropdown = {
  // Without this decorator, the top and left sides of the outline on hover get cut off from the hardcoded story.height value.
  decorators: [
    (Story) => {
      const storyWrapper = document.createElement('div');
      storyWrapper.style.padding = '1rem';
      storyWrapper.appendChild(Story());
      return storyWrapper;
    }
  ],
  args: {
    ...Primary.args,
    type: 'Dropdown',
  },
  parameters: {
    docs: {
      story: {
        height: '200px',
      },
      source: {
        excludeDecorators: true
      }
    },
  },
}
export const DropdownLarge = {
  decorators: [...Dropdown.decorators],
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
  decorators: [...Dropdown.decorators],
  args: {
    ...Dropdown.args
  },
  tags: ['!dev'],
  parameters: {
    ...Dropdown.parameters
  }
}

export const DropdownRounded = {
  render: renderAllCorners,
  decorators: [...Dropdown.decorators],
  args: {
    ...Dropdown.args
  },
  tags: ['!dev'],
  parameters: {
    ...Dropdown.parameters,

  }
}
