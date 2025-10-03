import Link from "next/link";
import { Home, Info, Briefcase, Wrench, Mail } from "lucide-react"; 

export default function Navbar() {
  return (
    <div>
<nav
  className="
    fixed top-0 left-0 right-0 z-30
    flex flex-row justify-center gap-5
    p-4 bg-cyan-950 text-white shadow-lg rounded-none

    lg:top-1/2 lg:-translate-y-1/2 lg:right-4 lg:left-auto
    lg:flex-col lg:gap-8 lg:p-6 lg:rounded-full
  "
>
  {/* Nav Links */}


        <Link href="#home" className="btn btn-circle btn-ghost text-white">
          <Home size={24} />
        </Link>
        <Link href="#about" className="btn btn-circle btn-ghost text-white">
          <Info size={24} />
        </Link>
        <Link href="#projects" className="btn btn-circle btn-ghost text-white">
          <Briefcase size={24} />
        </Link>
        <Link href="#services" className="btn btn-circle btn-ghost text-white">
          <Wrench size={24} />
        </Link>
        <Link href="#contact" className="btn btn-circle btn-ghost text-white">
          <Mail size={24} />
        </Link>
      </nav>
    </div>
  );
}
