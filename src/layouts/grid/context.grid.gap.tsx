import React, {createContext, PropsWithChildren} from "react";
import type * as CSS from "csstype";

export interface IContextGridGap {
  gap: CSS.Property.Gap;
  gap_xs: CSS.Property.Gap;
  gap_sm: CSS.Property.Gap;
  gap_md: CSS.Property.Gap;
  gap_lg: CSS.Property.Gap;
  gap_xl: CSS.Property.Gap;
  gap_xxl: CSS.Property.Gap;
  gap_3xl: CSS.Property.Gap;
  gap_4xl: CSS.Property.Gap;
}

export interface IContextGridGapPartial {
  gap?: CSS.Property.Gap;
  gap_xs?: CSS.Property.Gap;
  gap_sm?: CSS.Property.Gap;
  gap_md?: CSS.Property.Gap;
  gap_lg?: CSS.Property.Gap;
  gap_xl?: CSS.Property.Gap;
  gap_xxl?: CSS.Property.Gap;
  gap_3xl?: CSS.Property.Gap;
  gap_4xl?: CSS.Property.Gap;
}

export interface IContextGridGapType extends IContextGridGapPartial, PropsWithChildren {}

export const ContextGridGapDefault = {
  gap: "0",
  gap_xs: "0",
  gap_sm: "0",
  gap_md: "0",
  gap_lg: "0",
  gap_xl: "0",
  gap_xxl:"0",
  gap_3xl: "0",
  gap_4xl: "0",
};

export const ContextGridGap = createContext<IContextGridGap>(ContextGridGapDefault);

export const ContextProviderGridGap = (props: IContextGridGapType) => {
  const { gap, gap_xs, gap_sm, gap_md, gap_lg, gap_xl, gap_xxl, gap_3xl, gap_4xl, children } = props;

  return (
      <ContextGridGap.Provider
          value={{
            gap: gap ?? ContextGridGapDefault.gap,
            gap_xs: gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_sm: gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_md: gap_md ?? gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_lg: gap_lg ?? gap_md ?? gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_xl: gap_xl ?? gap_lg ?? gap_md ?? gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_xxl: gap_xxl ?? gap_xl ?? gap_lg ?? gap_md ?? gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_3xl: gap_3xl ?? gap_xxl ?? gap_xl ?? gap_lg ?? gap_md ?? gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
            gap_4xl: gap_4xl ?? gap_3xl ?? gap_xxl ?? gap_xl ?? gap_lg ?? gap_md ?? gap_sm ?? gap_xs ?? gap ?? ContextGridGapDefault.gap,
          }}
      >
        {children}
      </ContextGridGap.Provider>
  );
};
