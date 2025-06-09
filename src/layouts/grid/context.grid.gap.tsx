import React, {createContext, PropsWithChildren} from "react";
import type * as CSS from "csstype";

export interface IContextGridGap {
  gap: CSS.Property.Gap;
  gapXs: CSS.Property.Gap;
  gapSm: CSS.Property.Gap;
  gapMd: CSS.Property.Gap;
  gapLg: CSS.Property.Gap;
  gapXl: CSS.Property.Gap;
  gapXxl: CSS.Property.Gap;
  gap3xl: CSS.Property.Gap;
  gap4xl: CSS.Property.Gap;
}

export interface IContextGridGapPartial {
  gap?: CSS.Property.Gap;
  gapXs?: CSS.Property.Gap;
  gapSm?: CSS.Property.Gap;
  gapMd?: CSS.Property.Gap;
  gapLg?: CSS.Property.Gap;
  gapXl?: CSS.Property.Gap;
  gapXxl?: CSS.Property.Gap;
  gap3xl?: CSS.Property.Gap;
  gap4xl?: CSS.Property.Gap;
}

export interface IContextGridGapType extends IContextGridGapPartial, PropsWithChildren {}

export const ContextGridGapDefault = {
  gap: "0",
  gapXs: "0",
  gapSm: "0",
  gapMd: "0",
  gapLg: "0",
  gapXl: "0",
  gapXxl:"0",
  gap3xl: "0",
  gap4xl: "0",
};

export const ContextGridGap = createContext<IContextGridGap>(ContextGridGapDefault);

export const ContextProviderGridGap = (props: IContextGridGapType) => {
  const { gap, gapXs, gapSm, gapMd, gapLg, gapXl, gapXxl, gap3xl, gap4xl, children } = props;

  return (
      <ContextGridGap.Provider
          value={{
            gap: gap ?? ContextGridGapDefault.gap,
            gapXs: gapXs ?? gap ?? ContextGridGapDefault.gap,
            gapSm: gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
            gapMd: gapMd ?? gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
            gapLg: gapLg ?? gapMd ?? gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
            gapXl: gapXl ?? gapLg ?? gapMd ?? gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
            gapXxl: gapXxl ?? gapXl ?? gapLg ?? gapMd ?? gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
            gap3xl: gap3xl ?? gapXxl ?? gapXl ?? gapLg ?? gapMd ?? gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
            gap4xl: gap4xl ?? gap3xl ?? gapXxl ?? gapXl ?? gapLg ?? gapMd ?? gapSm ?? gapXs ?? gap ?? ContextGridGapDefault.gap,
          }}
      >
        {children}
      </ContextGridGap.Provider>
  );
};
