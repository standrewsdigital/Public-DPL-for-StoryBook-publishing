import Handlebars from 'handlebars';
import navboxTemplate from './navbox.hbs?raw';
import '../../../scss-styles/navbox.scss';

const template = Handlebars.compile(navboxTemplate);

const navboxColours = ['Blue', 'Green', 'Burgundy'];
const roundedCorners = [false, true];

export default {
  render: ({ contentArray, size, hasRoundedCorners = false, colour = 'Blue' }) => {
    let columnClass = '';
    let hoverClass = '';

    switch (size) {
      case 'Large':
        columnClass = 'col-6-md';
        break;
      case 'Regular':
        columnClass = 'col-4-md';
        break;
      default:
        break;
    }

    switch (colour){
      case 'Green':
        hoverClass = 'hover-green'
        break;
      case 'Burgundy':
        hoverClass = 'hover-burgundy'
        break;
      case 'Blue':
      default:
        hoverClass = 'hover-primary'
        break;
    }

    return template({contentArray, size: columnClass, hasRoundedCorners, colour: colour.toLowerCase(), hoverClass});
  },
  title: 'Components/Navbox',
  docs: ['!autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['Regular', 'Large']
    },
    contentArray: { control: 'object' },
    hasRoundedCorners: { control: 'boolean' },
    colour: {
      control: 'select',
      options: navboxColours
    }
  },
  args: {
    hasRoundedCorners: false,
    colour: 'Blue',
  }
}

export const Navbox = {
  args: {
    contentArray: [
      {
        url: 'https://www.st-andrews.ac.uk/',
        title: 'Navbox title'
      }
    ],
    size: 'Regular',
  }
}

export const NavboxTextOnly = {
  name: 'Navbox - Text only',
  args: {
    contentArray: [
      {
        ...Navbox.args.contentArray[0],
        content: '<p>Lorem ipsum</p>',
      }
    ],
    size: 'Regular',
  }
}

export const NavboxImageOnly = {
  name: 'Navbox - Image only',
  args: {
    contentArray: [
      {
        ...Navbox.args.contentArray[0],
        image: './750x500.png',
        altText: '750x500 placeholder',
      }
    ],
    size: 'Regular',
  }
}

export const NavboxATextAndImage = {
  name: "Navbox - Text and image",
  args: {
    contentArray: [
      {
        ...NavboxTextOnly.args.contentArray[0],
        ...NavboxImageOnly.args.contentArray[0],
      }
    ],
    size: 'Regular',
  }
}
