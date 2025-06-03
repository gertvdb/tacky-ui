// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import {GridBasicExample, GridComplexExample, GridNoConfigExample} from "./grid.example.content";
import { Grid, IGrid } from "./index";

export default {
  title: "Grid",
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

type Story = StoryObj<typeof Grid>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  name: "Default",

  render: (args: IGrid) => <GridNoConfigExample />,
};

export const Basic: Story = {
  name: "Basic",

  render: (args: IGrid) => <GridBasicExample />,
};

export const Complex: Story = {
  name: "Complex",

  render: (args: IGrid) => <GridComplexExample />,
};
