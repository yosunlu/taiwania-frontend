'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SearchForm() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchText) return;
        router.push(`/events/${searchText}`);
      }

  return (
    <form onSubmit={handleSubmit} className="sm:w-[580px] mb-5">
    <input 
      className="w-full h-6 rounded-lg bg-white/50 px-3 border focus:ring-emerald-500 transition focus:bg-white/10 text-sm"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search any keyword" spellCheck={false}>
    </input>

  </form>
  )
  
}
