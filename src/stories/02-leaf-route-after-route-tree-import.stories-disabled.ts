// Note: This story is disabled on purpose because as soon as any story imports
// the routeTree.gen file, all stories start showing the __root layout instead
// of the page route content.

import type { Meta, StoryObj } from '@storybook/tanstack-react';

// Importing the generated route tree connects the leaf route to `__root`.
// After this import, Storybook can render the root layout, but the root
// layout's Outlet is still the Storybook mock `() => null`.
import '@/routeTree.gen';
import { Route } from '@/routes/index';

const meta = {
  title: 'Repro/02 Leaf Route After RouteTree Import',
  parameters: {
    layout: 'fullscreen',
    tanstack: {
      router: {
        route: Route,
        path: '/',
      },
    },
  },
} satisfies Meta<typeof Route>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Uses `route: Route` after `routeTree.gen` has connected the file route to `__root`.
 *
 * Expected: the root layout and page route content render together.
 * Actual: the root layout renders, but the page route content is missing.
 */
export const Default: Story = {};
