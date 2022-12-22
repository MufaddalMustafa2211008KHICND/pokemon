import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import mockData from './mockData.json';

describe('renders App Component', () => {
  it('Should render App', async () => {

    // jest.spyOn(global, 'fetch').mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(mockData)
    // })

    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    })
  })
});
