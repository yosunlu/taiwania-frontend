"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/?keyword=${searchText}/?page=1`);
  };
  console.log(pathname);
  // Reset search text when the pathname changes
  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (!keyword) {
      console.log(pathname);
      setSearchText("");
    }
  }, [pathname, searchParams]);

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[580px] mb-5 flex items-center justify-center -ml-[2rem] font-DM text-xs"
    >
      <input
        className="w-[10rem] h-[2rem] rounded-lg bg-white/50 px-3 border focus:border-emerald-700 focus:border-5 
        transition focus:outline-none focus:ring-0"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="keyword"
        spellCheck={false}
      ></input>
      <button
        type="submit"
        className="ml-3 h-[2rem] px-4 rounded-lg bg-emerald-700 text-white transition hover:bg-emerald-800"
      >
        Search
      </button>
    </form>
  );
}
