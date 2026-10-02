import Handlebars from 'handlebars';
import featuredPeopleTemplate from './featured-people.hbs?raw';
import '../../../scss-styles/featured-people.scss';

const template = Handlebars.compile(featuredPeopleTemplate);

export default {
  render: ({ peopleArray, indentDescription, heading, headingLevel, backgroundColour }) => {
    let columnClass = '';
    let backgroundClass = '';
    const peopleAmount = peopleArray.length;
    const nameHeadingLevel = `h${Number(headingLevel[1]) + 1}`;

    switch (true) {
      case peopleAmount === 1:
        break;
      case peopleAmount % 3 === 0:
        indentDescription = false;
        columnClass = 'col-4-lg';
        break;
      case peopleAmount % 2 === 0:
        columnClass = 'col-6-md';
        break;
      default:
        columnClass = 'col-4-lg';
        break;
    }

    switch (backgroundColour) {
      case 'Grey':
        backgroundClass = 'bg-light-grey-1';
        break;
      case 'White':
      default:
        break;
    }

    return template({
      peopleArray,
      columnClass,
      indentDescription,
      heading,
      headingLevel,
      nameHeadingLevel,
      backgroundClass
    });
  },
  title: 'Components/Featured People',
  tags: ['!autodocs'],
  argTypes: {
    heading: { control: 'text' },
    headingLevel: { control: 'select', options: ['h2', 'h3', 'h4']},
    peopleArray: { control: 'object' },
    indentDescription: {
      control: 'boolean',
      description: "Can only be indented with less than three people per row"
    },
    backgroundColour: {
      control: 'select',
      options: ['White', 'Grey'],
    }
  },
  args: {
    headingLevel: 'h2',
    backgroundColour: 'White',
  }
}

export const FeaturedPerson = {
  args: {
    heading: 'About the author',
    peopleArray: [
      {
        url: '#',
        name: 'Professor Sophia Adams',
        title: 'Structural Biologist',
        image: '../../assets/female-001.jpg',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum eget velit ac ultrices.</p>'
      }
    ],
    indentDescription: false,
  }
}

export const FeaturedPersonIndented = {
  name: "Featured person - Indented description",
  args: {
    ...FeaturedPerson.args,
    indentDescription: true,
  }
}

export const FeaturedPersonNoText = {
  name: 'Featured Person - No description',
  args: {
    peopleArray: [
      {
        ...FeaturedPerson.args.peopleArray[0],
        content: null
      }
    ],
  }
}

export const GridTwo = {
  name: 'Two profiles',
  args: {
    ...FeaturedPerson.args,
    heading: 'Student participants',
    peopleArray: [
      ...FeaturedPerson.args.peopleArray,
      {
        ...FeaturedPerson.args.peopleArray[0],
        name: 'Aiden Davis',
        title: 'School of English',
        image: '../../assets/male-001.jpg',
      }
    ],
  }
}

export const GridTwoIndented = {
  name: 'Two profiles - Indented description',
  args: {
    ...GridTwo.args,
    indentDescription: true,
  }
}

export const GridTwoNoText = {
  name: 'Two profiles - No description',
  args: {
    peopleArray: [
      {
        ...FeaturedPersonNoText.args.peopleArray[0]
      },
      {
        ...GridTwo.args.peopleArray[1],
        content: null
      }
    ],
  }
}

export const GridThree = {
  name: 'Three profiles',
  args: {
    peopleArray: [
      ...GridTwo.args.peopleArray,
      {
        ...FeaturedPerson.args.peopleArray[0],
        name: 'Olivia Evans',
        title: 'Senior Lecturer',
        image: '../../assets/female-002.jpg',
      }
    ],
  }
}


export const GridThreeNoText = {
  name: 'Three profiles - No description',
  args: {
    peopleArray: [
      ...GridTwoNoText.args.peopleArray,
      {
        ...GridThree.args.peopleArray[2],
        content: null
      }
    ],
  }
}

export const GridFour = {
  name: 'Four profiles',
  args: {
    ...GridTwo.args,
    peopleArray: [
      ...GridThreeNoText.args.peopleArray,
      {
        name: 'Dr Garrett Winters',
        image: '../../assets/male-002.jpg',
        title: 'School of Biology',
        url: '#'
      }
    ]
  }
}

export const GridSix = {
  name: 'Six profiles',
  args: {
    ...GridThreeNoText.args,
    peopleArray: [
      ...GridFour.args.peopleArray,
      {
        name: 'Brielle Williamson',
        image: '../../assets/female-003.jpg',
        title: 'PhD Student',
        url: '#'
      },
      {
        name: 'Aston Cox',
        image: '../../assets/male-004.jpg',
        title: 'Student',
        url: '#'
      }
    ],
    backgroundColour: 'Grey'
  }
}