import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SquareSymbolType } from "../square/square";
import Board from "./board";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Board",
  component: Board,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Board>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Board> = (args) => {
  const [nextPlayer, setNextPlayer] = React.useState("");
  const [board, setBoard] = React.useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ] as SquareSymbolType[]);

  function handelSquare(index: number) {
    const newState: SquareSymbolType[] = [...board];
    newState[index] = nextPlayer as SquareSymbolType;
    setNextPlayer(nextPlayer === "O" ? "X" : "O");
    setBoard(newState);
  }
  return (
    <Board
      {...args}
      nextPlayer={nextPlayer as "X" | "O"}
      handelSquare={handelSquare}
      boardState={board}
    />
  );
};
export const BoardX = Template.bind({});
BoardX.args = {
  nextPlayer: "X",
};
export const BoardO = Template.bind({});
BoardO.args = {
  nextPlayer: "O",
};
