import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Game from "./Game";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Game",
  component: Game,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Game>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Game> = (args) => <Game  />;

export const GameDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GameDefault.args = {
  symbol: " ",
};


