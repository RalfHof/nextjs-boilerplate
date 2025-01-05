import TechnologyPage from "@/src/components/technologie/page";
import Team from "@/src/components/Team/page";
import KontaktPage from "@/src/components/kontakt/page";
import Home from "@/src/components/home/page";
import FAQ from "@/src/components/faq/page";
import PriceInfoModul from "@/src/components/PriceInfo/page";

export default function Info() {
  return (
    <>
      <div style={{ height: "auto", paddingBottom: "100px", backgroundColor: "#1d0332" }}>

        {/* Abschnitt Home */}
        <div id="Home">
          <Home />
        </div>

        {/* Abschnitt Team */}
        <div id="Team">
          <Team />
        </div>

        {/* Abschnitt Technologien */}
        <div id="Technologien">
          <TechnologyPage />
        </div>


        <div id="Pricing">
          <PriceInfoModul />
        </div>


        {/* Abschnitt Kontakt */}
        <div id="Kontakt">
          <KontaktPage />
        </div>


        <div id="FAQ">
          <FAQ />
        </div>

      </div>
    </>
  );
}
