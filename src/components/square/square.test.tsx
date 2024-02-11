import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from './square';
test('renders square', () => {
  render(<Square  symbol='O' handleClick={() => console.log('clicked')} winner={false}/>);
  const textItemWitO = screen.getByText(/O/i);
  expect(textItemWitO).toBeInTheDocument();
  render(<Square symbol="O" handleClick={() => console.log('clicked')} winner={false} />);
  const textItemWithX = screen.getByText(/X/i);
  expect(textItemWithX).toBeInTheDocument();
});