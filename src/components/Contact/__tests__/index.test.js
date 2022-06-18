import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<Contact />);
  });

  it('renders', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  });

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1contact')).toHaveTextContent('Contact me')
  });

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('submitbutton')).toHaveTextContent('Submit')
  });
});