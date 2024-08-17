"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"


const routes = [
    {
        name:"Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Suggest",
        path: "/suggest"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

export default function Header() {
    const activePathname =  usePathname();
    return (
        <header className="flex items-center justify-between  h-14 px-3 sm:px-9">
            <Link href="/" className="text-emerald-500 font-semibold">Taiwania</Link>
            
            <nav className="h-full">
                <ul className="flex gap-x-6 h-full text-sm">
                {
                    routes.map((route) => (
                        <li 
                            key={route.path}
                            className={cn("hover:text-emerald-500 flex items-center relative transition", {
                                "text-emerald-500" : activePathname === route.path,
                                "text-black/50": activePathname !== route.path
                            })}
                        >
                            <Link href={route.path}>{route.name}</Link>
                            {
                                activePathname === route.path && (<motion.div layoutId="header-active-link" className="bg-emerald-500 h-1 w-full absolute bottom-1"></motion.div>)
                            }
                            
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
  }
  