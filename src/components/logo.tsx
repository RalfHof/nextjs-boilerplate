import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/info">
        
          <div style={{ backgroundColor: "red", height:"100%",margin:"0",padding:"0" }}>
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={175} 
              height={57} 
            />
          </div>
        
      </Link>
    </nav>
  );
}


