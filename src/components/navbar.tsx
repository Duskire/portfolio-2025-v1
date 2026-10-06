import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Navbar() {
  return (
        <nav className="flex flex-row items-center justify-between py-[32px] mx-[48px] gap-[32px]">
        {/* Left side of Navbar */}
        <Link
            href="/"
            className="relative text-[min(3vw,1.5rem)] font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
            Home
        </Link>

        {/* Right side of Navbar */}
        <div className="flex flex-row items-center gap-[32px] text-[min(3vw,1.5rem)] font-medium">
            <Link
            href="/work"
            className="relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
            Work
            </Link>
            <Link
            href="/about"
            className="relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
            About
            </Link>
            <Link
            href="mailto:zakrbool@gmail.com"
            className="flex gap-[16px] items-center relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
            Contact <FaExternalLinkAlt size="1em" />
            </Link>
        </div>
        </nav>
    );
}