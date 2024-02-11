import React from 'react';
import "./square.css"
export type SquareSymbolType  = ' ' | 'O' | 'X';

/** SquareProps encapsulates the type of props received by SquareProps */
export type SquareProps = {
    /** Squre can only take one of the symbols - empty string, 'O', or 'X'  */
  symbol: SquareSymbolType;
  /** a callback that gets called whenever square is clicked */
  handleClick: () => void;
  /** true if square is representinga winner, false otherwise */
  winner: boolean
};

function Square({ symbol, handleClick, winner = false }: SquareProps) {
return <div className={winner? "square winner":"square" }onClick={handleClick}>
    {symbol}</div>;
}

export default Square;