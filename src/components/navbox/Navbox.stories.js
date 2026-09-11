import { createNavbox } from './Navbox';

export default {
  title: 'Components/Navbox',
  tags: ['autodocs'],
  render: ({ contentArray, size }) => {

    const container = document.createElement('div');
    container.classList.add('container');

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    contentArray.forEach(({ image, altText, url, title, content }) => {
      row.appendChild(
        createNavbox({ image, altText, url, title, content, size })
      );
    })

    return container;
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['Regular', 'Large']
    },
    contentArray: { control: 'object' },
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
