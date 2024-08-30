"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Suggest",
    path: "/suggest",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between h-14 px-3 sm:px-9 w-full">
      
        <Link href="/" className="flex text-black/50 items-center">
          <Image
            alt="Taiwan is a country"
            src="/logo.png"
            width={0}
            height={0}
            className="mr-1.5"
            style={{ height: "23px", width: "auto" }}
          />
          <span className="text-lg">Taiwania</span>
        </Link>

        <nav className="h-full">
          <ul className="flex gap-x-6 h-full text-base">
            {routes.map((route) => (
              <li
                key={route.path}
                className={cn(
                  "hover:text-emerald-500 flex items-center relative transition",
                  {
                    "text-emerald-500": activePathname === route.path,
                    "text-black/50": activePathname !== route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {activePathname === route.path && (
                  <motion.div
                    layoutId="header-active-link"
                    className="bg-emerald-500 h-1 w-full absolute bottom-2"
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      
    </header>
  );
}
