import { createHeader } from '../components/header/Header';
import { createFooter } from '../components/footer/Footer';
import { createAlert } from '../components/alert/Alert';

export const createTestPage = () => {
  const wrapper = document.createElement('div');

  const header = createHeader();
  const alert = createAlert({headingLevel: 'h2', headingContent: 'Test page', content: `<p>This is test page content</p>`, option: 'success'})
  const footer = createFooter();

  wrapper.append(header, alert, footer);
  return wrapper;
}
