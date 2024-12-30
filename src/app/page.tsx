"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../globals.css";

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {

  const router = useRouter()

  useEffect(() => {
    router.push("/info")
  }, [router])

  return <>{children}</>;
};

export default App;
