import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Uh oh!</h2>
      <p>Wrong way.</p>
      <Link href="/">Get back to home</Link>
    </div>
  );
}
