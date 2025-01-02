
import TechnologyPage from "@/src/components/technologie/page";
import Team from "@/src/components/Team/page";
import KontaktPage from "@/src/components/kontakt/page";
import Home from "@/src/components/home/page";

export default function Info() {


  return (
    <>
      <div style={{ height: "auto", paddingBottom: "100px", backgroundColor: "#1d0332" }}>

        <Home />
        <Team />
        <TechnologyPage />
        <KontaktPage />
      </div>
    </>
  )
}