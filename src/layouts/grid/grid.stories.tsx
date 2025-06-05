// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import {
  PreviewBlock, PreviewFlex,
} from "./grid.example.content";
import { Grid, IGrid } from "./index";
import React from "react";

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

  render: (args: IGrid) =>  (
      <Grid>
        <Grid.Item>
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item>
          <PreviewBlock />
        </Grid.Item>
      </Grid>
  ),
};

export const Basic: Story = {
  name: "Basic",

  render: (args: IGrid) => (
      <Grid
          gap={"15px"}
          break_sm={"550px"}
          break_md={"880px"}
          cols={12}
      >
        <Grid.Item
            span={6}
            span_sm={6}
            span_md={4}
            span_xl={3}
        >
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item
            span={6}
            span_sm={6}
            span_md={4}
            span_xl={3}
        >
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item
            span={6}
            span_sm={6}
            span_md={4}
            span_xl={3}
        >
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item
            span={6}
            span_sm={6}
            span_md={4}
            span_xl={3}
        >
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item
            span={6}
            span_sm={6}
            span_md={4}
            span_xl={3}
        >
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item
            span={6}
            span_sm={6}
            span_md={4}
            span_xl={3}
        >
          <PreviewBlock />
        </Grid.Item>
      </Grid>
  ),
};

export const Complex: Story = {
  name: "Complex",

  render: (args: IGrid) => (
      <Grid
          gap={"15px"}
          cols={24}
      >
        <Grid.Item
            span={24}
            span_sm={24}
            span_md={12}
        >
          <PreviewFlex />
        </Grid.Item>
        <Grid.Item
            span={24}
            span_sm={24}
            span_md={4}
        >
          <PreviewBlock />
        </Grid.Item>
        <Grid.Item
            span={24}
            span_sm={24}
            span_md={8}
        >
          <PreviewFlex />
        </Grid.Item>
        <Grid.Item
            span={24}
            span_sm={24}
            span_md={2}
        >
          <PreviewFlex />
        </Grid.Item>
        <Grid.Item
            span={24}
            span_sm={24}
            span_md={18}
        >
          <Grid
              gap={"15px"}
              cols={24}
          >
            <Grid.Item
                span={24}
                span_sm={24}
                span_md={12}
            >
              <PreviewFlex />
            </Grid.Item>
            <Grid.Item
                span={24}
                span_sm={24}
                span_md={4}
            >
              <PreviewFlex />
            </Grid.Item>
            <Grid.Item
                span={24}
                span_sm={24}
                span_md={8}
            >
              <PreviewFlex />
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item
            span={24}
            span_sm={24}
            span_md={4}
        >
          <PreviewFlex />
        </Grid.Item>
      </Grid>
  ),
};
