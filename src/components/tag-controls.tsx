'use client'
import { useRouter } from "next/navigation";
import tagColors from '../lib/tag_colors';


type TagProps = {
    tag: string,
    displayName: string,
}
const btnStyles = `
    flex
    justify-center
    items-center 
    hover:text-black
    hover:shadow
    font-DM
    text-[11px]
    border
    px-1 
    py-0.3
    h-[1.3rem]
    rounded
    transition-none
    cursor-pointer
`;

export default function TagControls({tag, displayName}: TagProps) {
    const router = useRouter()
    const tagColor = tagColors[tag] || 'bg-emerald-200';
  return <button 
               className={`${tagColor} ${btnStyles} `}
               onClick={()=> router.push(`?tag=${tag}/?page=1`)}>
            {displayName}
        </button>
}
