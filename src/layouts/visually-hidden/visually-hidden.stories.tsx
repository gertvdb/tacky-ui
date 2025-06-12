// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import {VisuallyHidden, IVisuallyHidden} from "./index";
import React from "react";

export default {
    title: "VisuallyHidden",
    component: VisuallyHidden,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof VisuallyHidden>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",

    render: (args: IVisuallyHidden) =>  (
        <a href={"https://www.google.com"}>
            Read more <VisuallyHidden>about pirates</VisuallyHidden>
        </a>
    ),
};
