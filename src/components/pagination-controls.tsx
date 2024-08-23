import Link from "next/link";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons"

type PaginationControlProps = {
    previousPath: string,
    nextPath: string
}
const btnStyles = 'flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm'

export default function PaginationControls({previousPath, nextPath}: PaginationControlProps) {
  return <section className="flex justify-between w-full">
    {
        previousPath ? (
            <Link href={previousPath} className={btnStyles}>
            <ArrowLeftIcon/>
            Previous
        </Link>
        ) : <div/>
    }

    {
        nextPath && (
            <Link href={nextPath} className={btnStyles}>
            Next
            <ArrowRightIcon/>
        </Link>
        )
    }
  </section>
}
