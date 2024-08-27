'use client'
import { useRouter } from "next/navigation";


type TagProps = {
    tag: string,
}
const btnStyles = `
 flex
 flex-col
 item-center 
 bg-[#6ee7b7]/50
  h-[1rem] 
  w-[5rem]
  rounded-full
  hover:bg-emerald-200 
  hover:text-black
  hover:shadow-lg 
  transition 
  duration-200 
  ease-in-out
`;

export default function TagControls({tag}: TagProps) {
    const router = useRouter()
  return <button 
               className={btnStyles}
               onClick={()=> router.push(`?tag=${tag}/?page=1`)}>
            {tag}
        </button>
}

//    bg-[#6ee7b7]/50 absolute top-[-6rem] left-1/2 transform -translate-x-1/2 
//           -z-10 h-[20rem] w-[31.25rem] rounded-full blur-[5rem] sm:w-[68.75rem]"
