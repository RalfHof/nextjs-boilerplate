"use client";

import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <>
        <html lang="en">
          <body
           
          >
            <div
             
            >
          
            </div>
            <Navigation/>
            {children}
            <Footer/>
          </body>
        </html>
      </>

  );
}