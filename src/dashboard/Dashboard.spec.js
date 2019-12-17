// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';
import { toBeDisabled } from '@testing-library/jest-dom'
expect.extend({ toBeDisabled })

test('controls renders', () => {
    const {getAllByText} = render(<Dashboard/>)
    getAllByText(/open/i)
})

test('controls renders', () => {
    const { getAllByText } = render(<Dashboard />)
    getAllByText(/gate/i)
})