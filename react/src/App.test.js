import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Article from './components/article';

describe("Test App.js" , () => {
  test('should render learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/News/i);
    expect(linkElement).toBeInTheDocument();
  });  
});

describe('Articles rendered', () => {
  test('should render article image', () => {
    render(<App />);
    render(<Article />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });

  test('should render article', async () => {
    render(<Article />);
    const text = await screen.getByText(/Articles/i);
    expect(text).toBeInTheDocument();
  });

  test('should have a refresh button', async () => {
    render(<Article />);
    const refreshBtn = await screen.getByRole('button');
    expect(refreshBtn).toBeInTheDocument();
  });
})