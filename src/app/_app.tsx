"use client";

import { useRouter } from "next/navigation";
import "../globals.css"

interface AppProps {
  children: React.ReactNode;
}
const App: React.FC<AppProps> = ({ children }) => {
  const router = useRouter();

    

  return <>{children}</>;
};
export default App;

