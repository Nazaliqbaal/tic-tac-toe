import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChoosePlayer from "./players";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ChoosePlayer",
  component: ChoosePlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ChoosePlayer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChoosePlayer> = (args) => <ChoosePlayer  />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  
};

