import Handlebars from '../../helpers';
import containerTemplate from '../../decorators/container-row.hbs?raw';
import loaderTemplate from './loader.hbs?raw';
import '../../../scss-styles/loaders.scss';

const decoratorTemplate = Handlebars.compile(containerTemplate);
const template = Handlebars.compile(loaderTemplate);

export default {
  render: ({ loaderType }) => {
    return template({ loaderType });
  },
  decorators: [
    (story) => {
      return decoratorTemplate({ content: story() })
    }
  ],
  title: 'Components/Loader',
  docs: ['autodocs'],
  argTypes: {
    loaderType: {
      control: 'select',
      options: ['Bar', 'Crest'],
    }
  }
}

export const BarLoader = {
  args: {
    loaderType: 'Bar'
  }
}
export const CrestLoader = {
  args: {
    loaderType: 'Crest'
  }
}