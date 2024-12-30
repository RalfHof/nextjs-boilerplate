import Link from "next/link";

export default function NotFound() {
  return (
    <div id="ContainerNotFound">
      <h1>404 Not Found</h1>
      <Link href="/info">Zurück zur Info seite</Link>
    </div>
  );
}