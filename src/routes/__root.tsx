import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';

export const Route = createRootRoute({
  shellComponent: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
