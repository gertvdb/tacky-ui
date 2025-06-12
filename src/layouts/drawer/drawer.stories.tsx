// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import {Drawer, IDrawer} from "./index";
import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {ContextProviderIsOpen} from "@/context/context.is-open";
import {BtnExample} from "@/example/btn";
import {BoxExample} from "@/example/box";
import {HeadingExample} from "@/example/heading";
import {ContextProviderPortalManager} from "@/layouts/portal/context.portal.manager";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";
import {usePortalMountOpen} from "@/layouts/portal/hooks/use-portal-mount-open";

export default {
    title: "Drawer",
    component: Drawer,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof Drawer>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",
    render: (args: IDrawer) =>  (
        <div style={{height: "2000px"}}>
            <ContextProviderPortalManager zIndex={2000}>
                <DrawerExample/>
            </ContextProviderPortalManager>
        </div>
    ),
};

const DrawerExample = () => {
    const id = getRandomString();

    return (
        <>
            <DrawerBtn id={id}/>
            <DrawerPortal id={id}/>
        </>
    );
}

const DrawerPortal = (props: {id: string}) => {
    const {id} = props;

    return createPortal(
        <Drawer
            id={id}
            sizeExpanded={"50vw"}
            sizeCollapsed={"0px"}
        >
            <BoxExample>
                <HeadingExample>
                    In the drawer - {id}
                </HeadingExample>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <DrawerBtn id={id}/>
                    <Form/>
                </div>
            </BoxExample>
        </Drawer>,
        document.body
    );
}

const DrawerBtn = (props: {id: string}) => {
    const {id} = props;

    const ContextPortalManager = usePortalManager();
    usePortalMountOpen([id]);

    return (
        <BtnExample
            onClick={() => {
                if (!ContextPortalManager.isOpen(id)) {
                    ContextPortalManager.openPortal(id)
                } else {
                    ContextPortalManager.closePortal(id)
                }
            }}
        >
            {ContextPortalManager.isOpen(id) ? 'Close Drawer' : 'Open Drawer'}
        </BtnExample>
    )
}

export const Form = () => {
    return (
        <div style={{
            width: "100%",
            maxWidth: "100%",
            margin: "0 auto",
            boxSizing: "border-box",
        }}>
            <h3 style={{
                margin: "0 0 20px 0",
                color: "#333333",
                fontFamily: "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                fontSize: "20px",
                fontWeight: "600"
            }}>Contact Form</h3>

            <div style={{marginBottom: "16px"}}>
                <label style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#555555"
                }}>
                    Name
                </label>
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: "1px solid #dddddd",
                        borderRadius: "4px",
                        boxSizing: "border-box"
                    }}
                />
            </div>

            <div style={{marginBottom: "16px"}}>
                <label style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#555555"
                }}>
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: "1px solid #dddddd",
                        borderRadius: "4px",
                        boxSizing: "border-box"
                    }}
                />
            </div>

            <div style={{marginBottom: "16px"}}>
                <label style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#555555"
                }}>
                    Message
                </label>
                <textarea 
                    placeholder="Enter your message"
                    rows={4}
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "14px",
                        border: "1px solid #dddddd",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        resize: "vertical"
                    }}
                />
            </div>

            <button style={{
                padding: "10px 16px",
                backgroundColor: "#4a90e2",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                width: "100%"
            }}>
                Submit
            </button>
        </div>
    );
}


function getRandomString() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}