import { createNavbox } from './Navbox';

export default {
  title: 'Components/Navbox',
  tags: ['autodocs'],
  render: ({ image, altText, url, title, content, columns }) => {

    const container = document.createElement('div');
    container.classList.add('container');

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let i = 1; i <= columns; i++) {
      row.appendChild(
        createNavbox({ image, altText, url, title, content, columns })
      );
    }

    return container;
  },
  argTypes: {
    image: { control: 'text' },
    altText: { control: 'text' },
    url: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' },
    columns: {
      control: {
        type: 'number',
        min: 1,
        max: 3,
        step: 1,
      }
    }
  },
  args: {
    image: './750x500.png',
    altText: '750x500 placeholder',
    url: 'https://www.st-andrews.ac.uk/',
  }
}

export const Navbox = {
  args: {
    image: './750x500.png',
    altText: '750x500 placeholder',
    url: 'https://www.st-andrews.ac.uk/',
    title: 'Navbox title',
    content: '<p>Lorem ipsum</p>',
    columns: 1,
  }
}

export const GridTwo = {
  args: {
    image: './750x500.png',
    altText: '750x500 placeholder',
    url: 'https://www.st-andrews.ac.uk/',
    title: 'Navbox title',
    content: '<p>Lorem ipsum</p>',
    columns: 2,
  }
}
export const GridThree = {
  args: {
    image: './750x500.png',
    altText: '750x500 placeholder',
    url: 'https://www.st-andrews.ac.uk/',
    title: 'Navbox title',
    content: '<p>Lorem ipsum</p>',
    columns: 3,
  }
}
