// Note: This story is disabled on purpose because as soon as any story imports
// the routeTree.gen file, all stories start showing the __root layout instead
// of the page route content.

import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { routeTree } from '@/routeTree.gen';

const meta = {
  title: 'Repro/03 RouteTree With Path',
  parameters: {
    layout: 'fullscreen',
    tanstack: {
      router: {
        route: routeTree,
        path: '/',
      },
    },
  },
} satisfies Meta<typeof routeTree>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Uses the documented `route: routeTree` plus `path` shape.
 *
 * Expected: the root layout and page route content render together.
 * Actual: the root layout renders, but the page route content is missing.
 */
export const Default: Story = {};
