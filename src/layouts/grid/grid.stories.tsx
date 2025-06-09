// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import { Grid, IGrid } from "./index";
import React from "react";
import {BoxExample} from "@/example/box";

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
          <BoxExample dark={true}>
            Item 1
          </BoxExample>
        </Grid.Item>
        <Grid.Item>
          <BoxExample dark={true}>
            Item 2
          </BoxExample>
        </Grid.Item>
      </Grid>
  ),
};

export const Basic: Story = {
  name: "Basic",

  render: (args: IGrid) => (
      <Grid
          gap={"15px"}
          breakSm={"550px"}
          breakMd={"880px"}
          cols={12}
      >
        <Grid.Item
            span={6}
            spanSm={6}
            spanMd={4}
            spanXl={3}
        >
          <BoxExample dark={true}>
            Item 1
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={6}
            spanSm={6}
            spanMd={4}
            spanXl={3}
        >
          <BoxExample dark={true}>
            Item 2
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={6}
            spanSm={6}
            spanMd={4}
            spanXl={3}
        >
          <BoxExample dark={true}>
            Item 3
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={6}
            spanSm={6}
            spanMd={4}
            spanXl={3}
        >
          <BoxExample dark={true}>
            Item 4
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={6}
            spanSm={6}
            spanMd={4}
            spanXl={3}
        >
          <BoxExample dark={true}>
            Item 5
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={6}
            spanSm={6}
            spanMd={4}
            spanXl={3}
        >
          <BoxExample dark={true}>
            Item 6
          </BoxExample>
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
            spanSm={24}
            spanMd={12}
        >
          <BoxExample dark={true}>
            Item 1
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={24}
            spanSm={24}
            spanMd={4}
        >
          <BoxExample dark={true}>
            Item 2
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={24}
            spanSm={24}
            spanMd={8}
        >
          <BoxExample dark={true}>
            Item 3
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={24}
            spanSm={24}
            spanMd={2}
        >
          <BoxExample dark={true}>
            Item 4
          </BoxExample>
        </Grid.Item>
        <Grid.Item
            span={24}
            spanSm={24}
            spanMd={18}
        >
          <Grid
              gap={"15px"}
              cols={24}
          >
            <Grid.Item
                span={24}
                spanSm={24}
                spanMd={12}
            >
              <BoxExample dark={true}>
                Item 5
              </BoxExample>
            </Grid.Item>
            <Grid.Item
                span={24}
                spanSm={24}
                spanMd={4}
            >
              <BoxExample dark={true}>
                Item 6
              </BoxExample>
            </Grid.Item>
            <Grid.Item
                span={24}
                spanSm={24}
                spanMd={8}
            >
              <BoxExample dark={true}>
                Item 7
              </BoxExample>
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item
            span={24}
            spanSm={24}
            spanMd={4}
        >
          <BoxExample dark={true}>
            Item 8
          </BoxExample>
        </Grid.Item>
      </Grid>
  ),
};
