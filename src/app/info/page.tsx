
import TechnologyPage from "@/src/components/technologie/page";
import Team from "@/src/components/Team/page";
import KontaktPage from "@/src/components/kontakt/page";

export default function Info() {


  return (
    <>
    <div style={{height:"auto", paddingBottom:"100px", backgroundColor:"#1d0332"}}>


      <Team />
      <TechnologyPage />
      <KontaktPage/>
      </div>
    </>
  )
}