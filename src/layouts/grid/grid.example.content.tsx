import React from "react";
import {
  IGridConfigPartial,
  IGridItemConfigPartial,
} from "./grid.types";
import { Grid } from "./index";

const PreviewBlock = () => {
  return (
    <div
      style={{
        borderRadius: "4px",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        backgroundColor: "#eeeeee",
        height: "100%",
        minHeight: "36px"
      }}
    />
  );
};

export const GridNoConfigExample = () => {
    return (
        <Grid>
            <Grid.Item>
                <PreviewBlock />
            </Grid.Item>
            <Grid.Item>
                <PreviewBlock />
            </Grid.Item>
        </Grid>
    );
}

export const GridBasicExample = () => {
  const GridConfig: IGridConfigPartial = {
    gap: {
        initial: {
            row: "15px",
            column: "15px"
        }
    },
    breakpoints: {
      sm: "550px",
      md: "880px",
    },
    columns: 12,
  };

  const GridItemConfig: IGridItemConfigPartial = {
    span: {
      initial: 6,
      sm: 6,
      md: 4,
      xl: 3,
    },
  };

  return (
    <Grid config={GridConfig}>
      <Grid.Item config={GridItemConfig}>
        <PreviewBlock />
      </Grid.Item>
      <Grid.Item config={GridItemConfig}>
        <PreviewBlock />
      </Grid.Item>
      <Grid.Item config={GridItemConfig}>
        <PreviewBlock />
      </Grid.Item>
      <Grid.Item config={GridItemConfig}>
        <PreviewBlock />
      </Grid.Item>
      <Grid.Item config={GridItemConfig}>
        <PreviewBlock />
      </Grid.Item>
      <Grid.Item config={GridItemConfig}>
        <PreviewBlock />
      </Grid.Item>
    </Grid>
  );
};


export const GridComplexExample = () => {
    const GridConfig: IGridConfigPartial = {
        gap: {
            initial: {
                row: "15px",
                column: "15px"
            }
        },
        columns: 24,
    };

    const GridItemConfigOne: IGridItemConfigPartial = {
        span: {
            initial: 24,
            sm: 24,
            md: 12,
        },
    };

    const GridItemConfigTwo: IGridItemConfigPartial = {
        span: {
            initial: 24,
            sm: 24,
            md: 4,
        },
    };

    const GridItemConfigThree: IGridItemConfigPartial = {
        span: {
            initial: 24,
            sm: 24,
            md: 8,
        },
    };

    const GridItemConfigFour: IGridItemConfigPartial = {
        span: {
            initial: 24,
            sm: 24,
            md: 2,
        },
    };

    const GridItemConfigFive: IGridItemConfigPartial = {
        span: {
            initial: 24,
            sm: 24,
            md: 18,
        },
    };

    const GridItemConfigSix: IGridItemConfigPartial = {
        span: {
            initial: 24,
            sm: 24,
            md: 4,
        },
    };

    return (
        <Grid config={GridConfig}>
            <Grid.Item config={GridItemConfigOne}>
                <PreviewBlock />
            </Grid.Item>
            <Grid.Item config={GridItemConfigTwo}>
                <PreviewBlock />
            </Grid.Item>
            <Grid.Item config={GridItemConfigThree}>
                <PreviewBlock />
            </Grid.Item>
            <Grid.Item config={GridItemConfigFour}>
                <PreviewBlock />
            </Grid.Item>
            <Grid.Item config={GridItemConfigFive}>
                <Grid config={GridConfig}>
                    <Grid.Item config={GridItemConfigOne}>
                        <PreviewBlock />
                    </Grid.Item>
                    <Grid.Item config={GridItemConfigTwo}>
                        <PreviewBlock />
                    </Grid.Item>
                    <Grid.Item config={GridItemConfigThree}>
                        <PreviewBlock />
                    </Grid.Item>
                </Grid>
            </Grid.Item>
            <Grid.Item config={GridItemConfigSix}>
                <PreviewBlock />
            </Grid.Item>
        </Grid>
    );
};
