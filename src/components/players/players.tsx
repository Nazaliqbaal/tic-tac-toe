import React, { useState } from "react";
import "./players.css";
function ChoosePlayer() {
  const [firstPlayer, setFirstPlayer] = React.useState("X");
  const [secondPlayer, setSecondPlayer] = React.useState("O");
  const [error, setError] = React.useState<null | string>(null);
  function handleFirstPlayer(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstPlayer(event.target.value);
   validInputs(event.target.value, secondPlayer);
  }
  function handleSecondPlayer(event: React.ChangeEvent<HTMLInputElement>) {
    setSecondPlayer(event.target.value);
   validInputs(firstPlayer, event.target.value);
  }
  function validInputs(firstPlayer: string, secondPlayer: string) {
    if (firstPlayer === secondPlayer) {
      setError("Player 1 and 2 must not be same");
    } else {
      setError(null);
    }
  }

  return (
    <div id="player-container">
      <div id="player-input">
        <input value={firstPlayer} id="player1" onChange={handleFirstPlayer} />
        <input
          value={secondPlayer}
          id="player2"
          onChange={handleSecondPlayer}
        />
      </div>
      {error ? <div> {error} </div> : null}
      <h4>First to play:</h4>
      <input type="radio" name="initialPlayer" defaultChecked />
      {firstPlayer}
      <input type="radio" name="initialPlayer"  />
      {secondPlayer}
    </div>
  );
}
export default ChoosePlayer;
