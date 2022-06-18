import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = { name: "Cat green eyes", category: "portraits", description: "Portraits of people in my life", index: "1" };
const mockToggleModal = jest.fn();

afterEach(cleanup)

describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });
  
  it('renders', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    fireEvent.click(getByText('Close this modal'));
  
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})
