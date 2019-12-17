// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';
import { toHaveClass } from '@testing-library/jest-dom'
expect.extend({ toHaveClass })
test('gate is open/closed when locked/unlocked', () => {
    const { getByText } = render(<Display locked={true} unlocked={true} closed={true} open={true} />)
    getByText(/locked/i)
    getByText(/closed/i)
})

test('gate is closed if prop is true and open, if not it displays otherwise', () => {
    const { getByText, rerender } = render(<Display locked={true} closed={true} />);
    getByText(/closed/i);

    render(<Display locked={true} closed={false} />);
    getByText(/open/i);
})

test('Displays locked if locked prop is true, and open if otherwise', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    getByText(/locked/i);

    render(<Display locked={false} closed={true} />);
    getByText(/unlocked/i);
})

test('When locked or closed use the red-led class', () => {
    const { getByText } = render(<Display locked={true} closed={true} />)
    const panel = getByText(/closed/i)

    expect(panel).toHaveClass('red-led')
})

test('When unlocked or open use the green-led class', () => {
    const { getByText } = render(<Display locked={false} closed={false} />)
    const panel = getByText(/open/i)

    expect(panel).toHaveClass('green-led')
})
