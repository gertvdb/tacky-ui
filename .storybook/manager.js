import { addons } from "@storybook/manager-api";
import TacticsTheme from "./theme";

addons.setConfig({
  theme: TacticsTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: false,
    collapsedRoots: ["other"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    "storybook/background": { hidden: false },
    "storybook/viewport": { hidden: false },
  },
});
