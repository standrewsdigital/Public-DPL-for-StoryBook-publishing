import '../scss-styles/main.scss';
import './docs.scss';

import { formatHtmlSource } from './source-transforms';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    docs: {
      codePanel: true,
      source: {
        transform: formatHtmlSource,
      },
    },
  },
};

export default preview;