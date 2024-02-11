import React from 'react';
import './Game.css';
import Board from '../board/board';
import StepList from '../StepList/StepList';
import { SquareSymbolType } from '../square/square';
import { findWinner } from '../../utils/tic-tac-toe.logic'; 

const Game = () => {
  const [selectedStep, setSelectedStep] = React.useState(0);
  const [history, setHistory] = React.useState<Array<SquareSymbolType[]>>([
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ]);

  const [initialPlayer, setInitialPlayer] = React.useState('X');
  const [player, setPlayer] = React.useState(initialPlayer);
  const currentBoard: SquareSymbolType[] = history[selectedStep];

  function handleSquare(squareIndex: number) {
    //Get the most recent history
    const recentBoard = history[selectedStep];
    const newBoard: SquareSymbolType[] = [...recentBoard];
    newBoard[squareIndex] = player as SquareSymbolType;
    const historyUntilSelection = history.slice(0, selectedStep + 1);
    setHistory([...historyUntilSelection, newBoard]);
    const alternatePlayer = initialPlayer === 'X' ? 'O' : 'X';
    const nextPlayer = selectedStep % 2 === 0 ? alternatePlayer : initialPlayer;
    setPlayer(nextPlayer);
    setSelectedStep(historyUntilSelection.length);
  }

  function handleStep(step: number) {
    setSelectedStep(step);
    const alternatePlayer = initialPlayer === 'O' ? 'X' : 'O';
    const nextPlayer = step % 2 === 0 ? initialPlayer : alternatePlayer;
    setPlayer(nextPlayer);
  }
  function handleInitialPlayer(event: React.ChangeEvent<HTMLInputElement>) {
    if (selectedStep === 0) {
      setInitialPlayer(event.currentTarget.value);
      setPlayer(event.currentTarget.value);
    }
    console.log(event.currentTarget.value);
  }
  const winner = findWinner(history[selectedStep]);
  const gameStatus = winner
    ? `${winner} won the game!!`
    : `Next player: ${player}`;

  return (
    <div className="game">
      <div>
        <input
          type="radio"
          name="initialPlayer"
          value={initialPlayer}
          onChange={handleInitialPlayer}
          defaultChecked
        />{' '}
        X
        <input
          type="radio"
          name="initialPlayer"
          value={initialPlayer === 'X' ? 'O' : 'X'}
          onChange={handleInitialPlayer}
        />{' '}
        O
        <Board boardState={currentBoard} handelSquare={handleSquare} />
        <h4>{gameStatus}</h4>
      </div>
      <StepList
        selectedStep={selectedStep}
        numberOfSteps={history.length}
        handleStep={handleStep}
      />
    </div>
  );
};

export default Game;








