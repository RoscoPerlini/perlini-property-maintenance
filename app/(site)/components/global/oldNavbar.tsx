import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.svg";

export default function Navbar() {
  return (
    <header className="md:px-16 px-6 py-6 z-30 md:mb-10 mb-10">
      <div className=" mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={210} height={106} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8 uppercase font-normal text-[14.5px]">
            <li className="relative font-semibold after:block after:absolute after:content-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-black">
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300 tracking-[6%]"
              >
                <span className="pr-1">01</span>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Trick of the Trades App
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
