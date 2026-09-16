import Handlebars from 'handlebars';
import navboxTemplate from './navbox.hbs?raw';

const template = Handlebars.compile(navboxTemplate);

export default {
  render: ({ contentArray, size, hasRoundedCorners, colour }) => {
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
  docs: ['autodocs'],
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
        title: 'Navbox title',
        content: '<p>Lorem ipsum</p>',
        image: './750x500.png',
        altText: '750x500 placeholder',
      },
      {
        url: 'https://www.st-andrews.ac.uk/',
        title: 'Navbox title',
        content: '<p>Loremdddd ipsum</p>',
        image: './750x500.png',
        altText: '750x500 placeholder',
      }
    ],
    size: 'Regular',
    hasRoundedCorners: false,
    colour: 'Blue',
  }
}
