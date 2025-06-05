import React from "react";
import { Grid } from "./index";
import * as GridStories from "./grid.stories";
import {Canvas} from "@storybook/blocks";


export const PreviewBlock = () => {

    return (
        <div
            style={{
                display: "block",
                borderRadius: "4px",
                boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                backgroundColor: "#eeeeee",
                padding: "16px",
                width: "100%"
            }}
        >
            <div
                style={{
                    display: "block",
                    border: "1px solid #ffffff"
                }}
            >
                1
            </div>
            <div
                style={{
                    display: "block",
                    border: "1px solid #ffffff"
                }}
            >
                2
            </div>
        </div>
    )
}


export const PreviewFlex = () => {
  return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: "1 1 auto",
          flexDirection: 'row',
          borderRadius: "4px",
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          backgroundColor: "#eeeeee",
          padding: "16px",
        }}
      >
          <div
              style={{
                  display: "flex",
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #ffffff"
              }}
          >
              1
          </div>
          <div
              style={{
                  display: "flex",
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #ffffff"
              }}
          >
              2
          </div>
      </div>
  );
};

