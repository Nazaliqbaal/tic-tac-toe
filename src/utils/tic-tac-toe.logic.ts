import boardStories from "../components/board/board.stories"

export type SquareStateType = ' ' | 'X' | 'O';
export type WinnerType = undefined | 'X' | 'O';
export function findWinner(boardState: Array<SquareStateType>): WinnerType {
  const winingSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const result = winingSequences.reduce<WinnerType>(
    (accumulated, sequence: Array<number>): WinnerType => {
      if (accumulated === undefined) {
        if (
          boardState[sequence[0]] === boardState[sequence[1]] &&
          boardState[sequence[1]] === boardState[sequence[2]]
        ) {
          if (boardState[sequence[0]] !== ' ') {
            return boardState[sequence[0]] as WinnerType;
          }
        }
      }
      return accumulated;
    },
    undefined,
  );
  return result;
}


export function findWinningSequence(boardState: Array<SquareStateType>):Array<number>{
    const winingSequences = [
        [0,1,2], 
        [3,4,5], 
        [6,7,8], 
        [0,3,6], 
        [1,4,7], 
        [2,5,8], 
        [0,4,8], 
        [2,4,6]]

const result = winingSequences.reduce<Array<number> >(
    (accumulated, sequence: Array<number>): Array<number> => {
    if(accumulated.length === 0){
        if(
            boardState[sequence[0]]=== boardState[sequence[1]] && 
            boardState[sequence[1]] === boardState[sequence[2]]
            ){
            if(boardState[sequence[0]]!==' '){
                return sequence;
            }
        }
    }
    return accumulated;
}, []);
return result;
}