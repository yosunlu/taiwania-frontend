'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons"

type PaginationControlProps = {
    previousPath: string,
    nextPath: string
}
const btnStyles = `
  flex items-center gap-x-2 px-5 py-2 
  rounded-md
  border
  hover:bg-emerald-200 
  hover:text-black
  hover:shadow-lg 
  transition 
  duration-200 
  ease-in-out
`;

export default function TagControls({previousPath, nextPath}: PaginationControlProps) {
    const router = useRouter()
  return <section className="flex justify-between w-full">
    {
        previousPath ? (
            <button 
               className={btnStyles}
               onClick={()=> router.push(previousPath)}>
            <ArrowLeftIcon/>
            Previous
        </button>
        ) : <div/>
    }

    {
        nextPath && (
            <button 
                className={btnStyles}
                onClick={()=> router.push(nextPath)}>
            Next
            <ArrowRightIcon/>
        </button>
        )
    }
  </section>
}
