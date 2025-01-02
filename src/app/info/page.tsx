import Footer from "@/src/components/footer";
import Navigation from "@/src/components/navigation";
import TechnologyPage from "@/src/components/technologie/page";
import AboutUs from "@/src/components/uber-uns/page";

export default function Info(){


  return(
    <>
    <Navigation/>
  
    <AboutUs/>
    <TechnologyPage/>
      <Footer/>
    </>
  )
}