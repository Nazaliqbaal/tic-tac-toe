import React from "react";
import { render, screen } from '@testing-library/react';
import  Board  from "./board";
test('renders square', ()=> {
    const handelSquare = jest.fn;
    render(<Board boardState={['O','X','O','X','O','X','O','X',' ']}
    handelSquare = {handelSquare}
    />);
});