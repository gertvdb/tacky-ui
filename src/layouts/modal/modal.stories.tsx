// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { StoryObj } from "@storybook/react";
import React from "react";
import {createPortal} from "react-dom";
import {ContextProviderIsOpen} from "@/context/context.is-open";
import {BtnExample} from "@/example/btn";
import {BoxExample} from "@/example/box";
import {HeadingExample} from "@/example/heading";
import {ContextProviderPortalManager} from "@/layouts/portal/context.portal.manager";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";
import {Modal} from "@/layouts/modal/index";
import {IModal} from "@/layouts/modal/modal.types";

export default {
    title: "Modal",
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

type Story = StoryObj<typeof Modal>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Default",
    render: (args: IModal) =>  (
        <ContextProviderPortalManager zIndex={2000}>
            <ModalExample/>
        </ContextProviderPortalManager>
    ),
};

const ModalExample = () => {

    const id = getRandomString();

    return (
        <>
            <ModalBtn id={id}/>
            <ModalPortal id={id}/>
        </>
    );
}

const ModalPortal = (props: {id: string}) => {
    const {id} = props;

    return createPortal(
        <Modal
            id={id}
        >
            <div>
                <HeadingExample>
                    In the modal - {id}
                </HeadingExample>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <ModalBtn id={id}/>
                    <Form/>
                    <ContextProviderIsOpen>
                        <ModalExample/>
                    </ContextProviderIsOpen>
                </div>
            </div>
        </Modal>,
        document.body
    );
}

const ModalBtn = (props: {id: string}) => {
    const {id} = props;

    const ContextPortalManager = usePortalManager();
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
            {ContextPortalManager.isOpen(id) ? 'Close Modal' : 'Open Modal'}
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