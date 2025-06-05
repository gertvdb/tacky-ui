// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import React from "react";
import {Collapsable} from "@/layouts/collapsable/index";
import {ICollapsable} from "@/layouts/collapsable/collapsable.types";
import {useCollapsableVisibility} from "@/layouts/collapsable/hooks/use-collapsable-visibility";

export default {
    title: "Collapsable",
    component: Collapsable,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof Collapsable>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",

    render: (args: ICollapsable) =>  (
        <div style={{height: "400px"}}>
            <Collapsable
                aside={<Collapsable.Aside><Aside/></Collapsable.Aside>}
                main={<Collapsable.Main><Main/></Collapsable.Main>}
            />
        </div>
    ),
};

export const Right: Story = {
    name: "Right",

    render: (args: ICollapsable) =>  (
        <div style={{height: "400px"}}>
            <Collapsable
                position={'right'}
                aside={<Collapsable.Aside><Aside/></Collapsable.Aside>}
                main={<Collapsable.Main><Main/></Collapsable.Main>}
            />
        </div>
    ),
};

export const Large: Story = {
    name: "Large",

    render: (args: ICollapsable) =>  (
        <div style={{height: "400px"}}>
            <Collapsable
                size_expanded={"800px"}
                size_collapsed={"100px"}
                position={'right'}
                aside={<Collapsable.Aside><Aside/></Collapsable.Aside>}
                main={<Collapsable.Main><Main/></Collapsable.Main>}
            />
        </div>
    ),
};

export const Main = () => {
    return (
        <div
            style={{
                display: "block",
                backgroundColor: "#cccccc",
                padding: "16px",
                height: "100%",
                width: "100%"
            }}
        >
            <div>
                Main
            </div>
        </div>
    )
}

export const Aside = () => {
    return (
        <div
            style={{
                display: "block",
                backgroundColor: "#eeeeee",
                padding: "16px",
                height: "100%",
                width: "100%"
            }}
        >
            <div>
                Aside
            </div>
            <Toggle/>

        </div>
    )
}

export const Toggle = () => {
    const {isExpanded, setIsExpanded} = useCollapsableVisibility();

    return (
        <div
            style={{
                display: "block",
                border: "1px solid red",
                padding: "16px",
            }}
            onClick={() => {
            setIsExpanded(!isExpanded)
        }}>
            Toggle
        </div>
    )
}