import { render } from '@testing-library/react';
import { App } from './App';

describe('renders links', () => {
  const { container } = render(<App />);
  const links = container.getElementsByTagName('a');
  const hrefs = Object.values(links).map((link) => link.getAttribute('href'));

  test('renders link to fscreen', () => {
    expect(hrefs).toContain('https://github.com/rafgraph/fscreen');
  });
});
