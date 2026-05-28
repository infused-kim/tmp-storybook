import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { Route } from '@/routes/index';

const meta = {
  title: 'Example/Page',
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    tanstack: {
      // Example of providing a custom route for a story.
      // The page component is extracted if a component is not set for the story.
      // More on mocking Tanstack Router at: https://storybook.js.org/docs/get-started/tanstack-react#routing
      router: {
        route: Route,
      },
    },
  },
} satisfies Meta<typeof Route>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
