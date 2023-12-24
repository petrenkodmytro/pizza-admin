import type { Preview } from "@storybook/react";

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from "../src/core/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// setting theme for storybook
export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    theme: theme,
  },
  defaultTheme: 'theme',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];
