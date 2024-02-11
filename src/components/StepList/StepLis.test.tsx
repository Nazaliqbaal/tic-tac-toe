import React from "react";
import { render, screen } from '@testing-library/react';
import StepList from "./StepList";

describe('Test rendering StepList', () => {
    test('renders a simple stepList with one item', () => {
    render(<StepList />);
});
});