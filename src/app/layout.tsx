"use client";

import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation, die auf die Anker-Links verweist */}
        <Navigation />

        <main>
          {/* Hier wird der Inhalt von 'children' für jede Seite eingefügt */}
          <div id="Home">
            <section>{children}</section> {/* Hier kannst du den Inhalt für die Seite darstellen */}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
