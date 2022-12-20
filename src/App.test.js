import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('renders App Component', () => {
  it('Should render App', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    })
    expect(linkElement).toBeInTheDocument();
  })
});
