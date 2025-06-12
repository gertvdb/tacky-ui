import {Collapsable, ContextProviderCollapsable} from "@/layouts/collapsable";
import type {StoryObj} from "@storybook/react";
import {ICollapsable} from "@/layouts/collapsable/collapsable.types";
import React, {PropsWithChildren} from "react";
import {Aside, Main} from "@/layouts/collapsable/collapsable.stories";
import {Button} from "@/layouts/button/index";
import {IButton} from "@/layouts/button/button.types";
import {useButtonState} from "@/layouts/button/hooks/use-button-state";

export default {
    title: "Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof Button>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",

    render: (args: IButton) =>  (
        <div style={{display: 'flex', gap: '25px'}}>
            <Button ariaLabel={'Click Here'}>
                <ButtonInner/>
            </Button>
            <Button disabled={true} ariaLabel={'Click Here'}>
                <ButtonInner/>
            </Button>
        </div>
    ),
};

const ButtonInner = () => {
    const ContextButtonState = useButtonState();

    if (ContextButtonState.state === 'hover') {
        return (
            <div style={{display: "flex", gap: "5px", flexDirection: "column", alignItems: "center"}}>
                {ContextButtonState.state}
                <ButtonMarkup isDisabled={false}>
                    Click Me
                </ButtonMarkup>
            </div>
        )
    }

    return (
        <div style={{display: "flex", gap: "5px", flexDirection: "column", alignItems: "center"}}>
            {ContextButtonState.state}
            <ButtonMarkup isDisabled={ContextButtonState.state === 'disabled'}>
                Click Me
            </ButtonMarkup>
        </div>
    )
}

interface IButtonMarkup extends PropsWithChildren {
    isDisabled: boolean;
}

const ButtonMarkup = (props: IButtonMarkup) => {
    const {children, isDisabled} = props;
    return (
        <div style={{
            all: 'unset',
            borderRadius: '25px',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 16px',
            fontFamily: 'inherit',
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: '1.5',
            textAlign: 'center',
            textDecoration: 'none',
            userSelect: 'none',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',
            backgroundColor: isDisabled ? '#cccccc' : '#f0f0f0',
            border: '1px solid #ccc',
            color: '#333',
            transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
            position: 'relative',
        }}>
            {children}
        </div>
    )
}

