"use client"

import Link from "next/link";

export default function NotFound() {
  return (
    <div id="ContainerNotFound">
      <h1 id="NotFoundHeader">404 Not Found</h1>
      <Link id="NotFoundLink" href="/info">Zurück zur Info seite</Link>
    </div>
  );
}
