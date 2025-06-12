// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import React from "react";
import {AriaHidden} from "@/layouts/aria-hidden/index";
import {IAriaHidden} from "@/layouts/aria-hidden/aria-hidden.types";

export default {
    title: "AriaHidden",
    component: AriaHidden,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof AriaHidden>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",

    render: (args: IAriaHidden) =>  (
        <a href={"https://www.google.com"}>
            Read more <AriaHidden>about pirates</AriaHidden>
        </a>
    ),
};
