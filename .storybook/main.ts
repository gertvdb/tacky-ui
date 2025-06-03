// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Required
  framework: "@storybook/react-vite",

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx|jsx)"],

  typescript: {
    reactDocgen: "react-docgen", // or false if you don't need docgen at all
  },

  // Optional
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],

  staticDirs: ["../public"],
  docs: {},
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
