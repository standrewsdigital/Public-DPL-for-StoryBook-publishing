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
    contentArray: [
      {
        url: 'https://www.st-andrews.ac.uk/',
        title: 'Navbox title',
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
        url: 'https://www.st-andrews.ac.uk/',
        title: 'Navbox title',
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
        url: 'https://www.st-andrews.ac.uk/',
        title: 'Navbox title',
        image: './750x500.png',
        altText: '750x500 placeholder',
      }
    ],
    size: 'Regular',
  }
}

export const NavboxTextAndImage = {
  name: 'Navbox - Text and Image',
  args: {
    contentArray: [
      {
        url: 'https://www.st-andrews.ac.uk/',
        title: 'Navbox title',
        content: '<p>Lorem ipsum</p>',
        image: './750x500.png',
        altText: '750x500 placeholder',
      }
    ],
    size: 'Regular',
  }
}

export const GridTwo = {
  name: 'Grid - Two navboxes',
  args: {
    contentArray: [
      ...Navbox.args.contentArray,
      ...Navbox.args.contentArray
    ],
    size: 'Large',
  }
}

export const GridTwoTextOnly = {
  name: 'Grid - Two navboxes, text only',
  args: {
    contentArray: [
      ...NavboxTextOnly.args.contentArray,
      ...NavboxTextOnly.args.contentArray
    ],
    size: 'Large',
  }
}

export const GridTwoImageOnly = {
  name: 'Grid - Two navboxes, image only',
  args: {
    contentArray: [
      ...NavboxImageOnly.args.contentArray,
      ...NavboxImageOnly.args.contentArray
    ],
    size: 'Large',
  }
}



export const GridTwoTextAndImage = {
  name: 'Grid - Two navboxes, text and Image',
  args: {
    contentArray: [
      ...NavboxTextAndImage.args.contentArray,
      ...NavboxTextAndImage.args.contentArray,
    ],
    size: 'Large',
  }
}

export const GridThree = {
  name: 'Grid - Three navboxes',
  args: {
    contentArray: [
      ...Navbox.args.contentArray,
      ...Navbox.args.contentArray,
      ...Navbox.args.contentArray
    ],
    size: 'Regular'
  }
}

export const GridThreeTextOnly = {
  name: 'Grid - Three navboxes, text only',
  args: {
    contentArray: [
      ...NavboxTextOnly.args.contentArray,
      ...NavboxTextOnly.args.contentArray,
      ...NavboxTextOnly.args.contentArray,
    ],
    size: 'Regular',
  }
}


export const GridThreeImageOnly = {
  name: 'Grid - Three navboxes, image only',
  args: {
    contentArray: [
      ...NavboxImageOnly.args.contentArray,
      ...NavboxImageOnly.args.contentArray,
      ...NavboxImageOnly.args.contentArray,
    ],
    size: 'Regular',
  }
}

export const GridThreeTextAndImage = {
  name: 'Grid - Three navboxes, text and Image',
  args: {
    contentArray: [
      ...NavboxTextAndImage.args.contentArray,
      ...NavboxTextAndImage.args.contentArray,
      ...NavboxTextAndImage.args.contentArray,
    ],
    size: 'Regular',
  }
}
