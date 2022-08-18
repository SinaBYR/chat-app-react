import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '../../../store/context';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Create } from './Create';

test('renders create page for creating new channel', () => {
  const { container } = render(<AppContextProvider><ThemeProvider><Create /></ThemeProvider></AppContextProvider>);

  const form = container.getElementsByTagName('form')[0];
  const heading = container.getElementsByTagName('h2')[0];
  const inputs = container.getElementsByTagName('input');

  expect(form).toBeInTheDocument();
  expect(heading).toHaveTextContent('New channel');
  expect(inputs).toHaveLength(3);
});