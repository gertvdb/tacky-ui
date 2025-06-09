// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import React from "react";
import {Collapsable, ContextProviderCollapsable} from "@/layouts/collapsable/index";
import {ICollapsable} from "@/layouts/collapsable/collapsable.types";
import {useCollapsable} from "@/layouts/collapsable/hooks/use-collapsable";
import {BoxExample} from "@/example/box";
import {HeadingExample} from "@/example/heading";
import {BtnExample} from "@/example/btn";

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
            <ContextProviderCollapsable
                isExpanded={false}
            >
                <Collapsable
                    aside={
                        <Collapsable.Aside>
                            <Aside/>
                        </Collapsable.Aside>
                    }
                    main={
                        <Collapsable.Main>
                            <Main/>
                        </Collapsable.Main>
                    }
                />
            </ContextProviderCollapsable>
        </div>
    ),
};

export const Right: Story = {
    name: "Right",

    render: (args: ICollapsable) =>  (
        <div style={{height: "400px"}}>
            <ContextProviderCollapsable
                isExpanded={false}
            >
                <Collapsable
                    position={'right'}
                    aside={<Collapsable.Aside><Aside/></Collapsable.Aside>}
                    main={<Collapsable.Main><Main/></Collapsable.Main>}
                />
            </ContextProviderCollapsable>
        </div>
    ),
};

export const Large: Story = {
    name: "Large",

    render: (args: ICollapsable) =>  (
        <div style={{height: "400px"}}>
            <ContextProviderCollapsable
                isExpanded={false}
            >
                <Collapsable
                    sizeExpanded={"800px"}
                    sizeCollapsed={"100px"}
                    position={'right'}
                    aside={<Collapsable.Aside><Aside/></Collapsable.Aside>}
                    main={<Collapsable.Main><Main/></Collapsable.Main>}
                />
            </ContextProviderCollapsable>
        </div>
    ),
};

export const ExternalControl: Story = {
    name: "External Control",
    render: (args: ICollapsable) =>  {
        return (
            <ContextProviderCollapsable
                isExpanded={false}
            >
                <div style={{height: "400px"}}>
                    <div
                        style={{
                            padding: "16px",
                        }}
                    >
                        <Toggle/>
                    </div>

                    <Collapsable
                        sizeExpanded={"225px"}
                        sizeCollapsed={"0px"}
                        position={'left'}
                        aside={<Collapsable.Aside><Aside/></Collapsable.Aside>}
                        main={<Collapsable.Main><Main/></Collapsable.Main>}
                    />
                </div>
            </ContextProviderCollapsable>

        );
    },
};

export const Main = () => {
    return (
        <BoxExample
            dark={true}
            border={true}
            shadow={false}
        >
            <HeadingExample>
                Main
            </HeadingExample>
            <Toggle/>
        </BoxExample>
    )
}

export const Aside = () => {
    return (
        <BoxExample
            dark={false}
            shadow={false}
            border={true}
        >
            <HeadingExample>
                Aside
            </HeadingExample>
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <Toggle/>
            </div>
        </BoxExample>
    )
}

export const Toggle = () => {
    const {isExpanded, setIsExpanded} = useCollapsable();

    return (
        <BtnExample
            onClick={() => setIsExpanded(!isExpanded)}
            >
            {isExpanded ? 'Collapse' : 'Expand'}
        </BtnExample>
    )
}
