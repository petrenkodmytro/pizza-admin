import type { Meta, StoryObj } from "@storybook/react";

import CloudinaryInputUI from "./cloudinary-input-ui";
import { ThemeProvider } from "@mui/material";

const meta: Meta<typeof CloudinaryInputUI> = {
  <ThemeProvider theme={theme}> component: CloudinaryInputUI</ThemeProvider>
 
};

export default meta;

type Story = StoryObj<typeof CloudinaryInputUI>;

export const FirstStory: Story = {
  args: {},
};
