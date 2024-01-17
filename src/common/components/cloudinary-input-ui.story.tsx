import type { Meta, StoryObj } from "@storybook/react";
import CloudinaryInputUI from "./cloudinary-input-ui";

const meta: Meta<typeof CloudinaryInputUI> = {
  component: CloudinaryInputUI,
};

export default meta;

type Story = StoryObj<typeof CloudinaryInputUI>;

export const FirstStory: Story = {
  args: {},
};
