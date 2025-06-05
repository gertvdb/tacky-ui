import { PropsWithChildren } from "react";
import { IContextGridGapPartial } from "@/layouts/grid/context.grid.gap";
import { IContextGridBreakPartial } from "@/layouts/grid/context.grid.break";
import { IContextGridColsPartial } from "@/layouts/grid/context.grid.cols";
import { IContextGridItemSpanPartial } from "@/layouts/grid/context.grid.item.span";

export interface IGrid extends
    IContextGridGapPartial,
    IContextGridBreakPartial,
    IContextGridColsPartial,
    PropsWithChildren {}

export interface IGridItem extends
    IContextGridItemSpanPartial,
    PropsWithChildren {}
