import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { Route } from '@/routes/index';

const meta = {
  title: 'Repro/01 Leaf Route Only',
  parameters: {
    layout: 'fullscreen',
    tanstack: {
      router: {
        route: Route,
      },
    },
  },
} satisfies Meta<typeof Route>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Uses the documented `route: Route` shape from a file route.
 *
 * Expected: Storybook includes `__root` and renders the page inside the root layout.
 * Actual: only the page route content renders; the root layout is not included.
 */
export const Default: Story = {};
