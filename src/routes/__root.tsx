import {
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import Header from '@/components/Header';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  console.log('[storybook-tanstack-repro] __root Outlet source:', String(Outlet));

  return (
    <div style={{ border: '3px solid #2563eb', padding: 16 }}>
      <Header />
      <main style={{ border: '2px dashed #9333ea', marginTop: 16, padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
