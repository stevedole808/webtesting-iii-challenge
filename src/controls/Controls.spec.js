// Test away!
import React from 'react';
import { render, fireEvent} from '@testing-library/react';

import Controls from './Controls';
import { toBeDisabled } from '@testing-library/jest-dom'
expect.extend({ toBeDisabled })

test('Buttons to toggle the closed and locked states', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    getByText(/unlock/i)
    getByText(/open/i)
})

test('if gate is closed, closed is true', () => {
    const { getByTestId } = render(<Controls closed={true}/>);
    const button = getByTestId(/toggle-unlock/i);
    fireEvent.click(button);
    getByTestId(/toggle-unlock/i)
})

test('if gate is closed and locked, gate is closed and locked', () => {
    const { getByTestId } = render (<Controls locked={true}/>)
    const button = getByTestId(/toggle-lock/i);
    fireEvent.click(button);
    getByTestId(/toggle-lock/i)
})

test('Open button is disabled if the gate is locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    const button = getByText(/open/i)
    expect(button).toBeDisabled()
})

test('Locked toggle button is disabled if the gate is open', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />)
    const button = getByText(/lock/i)
    expect(button).toBeDisabled()
})