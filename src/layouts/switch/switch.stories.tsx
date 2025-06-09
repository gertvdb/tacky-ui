// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import {Switch, ISwitch} from "./index";
import React from "react";
import {ContextProviderSwitch, ContextSwitch} from "@/layouts/switch/context.switch";
import {HeadingExample} from "@/example/heading";
import {BoxExample} from "@/example/box";
import {useCollapsable} from "@/layouts/collapsable";
import {BtnExample} from "@/example/btn";
import {useSwitch} from "@/layouts/switch/hooks/use-switch";

export default {
    title: "Switch",
    component: Switch,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof Switch>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",

    render: (args: ISwitch) =>  (
        <div style={{height: "400px"}}>
            <ContextProviderSwitch>
                <Switch
                    viewA={
                        <Switch.View>
                            <ViewA/>
                        </Switch.View>
                    }
                    viewB={
                        <Switch.View>
                            <ViewB/>
                        </Switch.View>
                    }
                />
                <Toggle/>
            </ContextProviderSwitch>
        </div>
    ),
};

const ViewA = () => {
    return (
        <BoxExample
            dark={false}
            shadow={false}
            border={true}
        >
            <HeadingExample>
                View A
            </HeadingExample>
        </BoxExample>
    );
}

const ViewB = () => {
    return (
        <BoxExample
            dark={true}
            shadow={false}
            border={true}
        >
            <HeadingExample>
                View B
            </HeadingExample>
        </BoxExample>
    );
}

export const Toggle = () => {
    const {activeView, setActiveView} = useSwitch();

    return (
        <BtnExample
            onClick={() => setActiveView(activeView === 'A' ? 'B' : 'A')}
        >
            {'Toggle'}
        </BtnExample>
    )
}