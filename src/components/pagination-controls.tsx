"use client";

import { useRouter } from "next/navigation";

type PaginationControlProps = {
  previousPath: string;
  nextPath: string;
};
const btnStyles = `
  w-[5rem] h-[2rem] px-2 rounded-lg bg-emerald-700 text-white transition hover:bg-emerald-800 font-DM text-sm mb-5
`;

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlProps) {
  const router = useRouter();
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <button className={btnStyles} onClick={() => router.push(previousPath)}>
          Previous
        </button>
      ) : (
        <div />
      )}

      {nextPath && (
        <button className={btnStyles} onClick={() => router.push(nextPath)}>
          Next
        </button>
      )}
    </section>
  );
}
