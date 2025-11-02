import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
        <footer className="flex items-center h-[128px] py-[32px] mx-[48px] gap-[32px] text-[24px]">
            <div className="flex flex-col justify-start flex-1">
                <span className="font-medium">Zak Bool</span>
                <div className="flex items-center gap-[48px]">
                    <Link href="mailto:zakrbool@gmail.com" className="hover:underline">
                        zakrbool@gmail.com
                    </Link>
                    <Link href="https://github.com/Duskire" className="hover:text-gray-500 transition">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/zak-bool/" className="hover:text-gray-500 transition">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>

            <div className="flex justify-center flex-1 gap-[64px]">
                <Link href="/" className="hover:underline">
                Home
                </Link>
                <Link href="/projects" className="hover:underline">
                Projects
                </Link>
                <Link href="/about" className="hover:underline">
                About
                </Link>
            </div>

            <div className="flex justify-end flex-1 text-[20px]">
                &copy; Zak Bool 2025
            </div>
        </footer>
    );
}