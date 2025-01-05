import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
      <Link href="/info">
        
          <div style={{ backgroundColor: "inherit", height:"100%",margin:"0",padding:"0" }}>
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={250} 
              height={100} 
            />
          </div>
        
      </Link>
  );
}


