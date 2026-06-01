import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <section style={{ border: '2px solid #dc2626', padding: 12 }}>
      <h1>Home page route content rendered</h1>
      <p>This content comes from routes/index.tsx.</p>
    </section>
  );
}
