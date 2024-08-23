import { getRows } from "@/lib/server_utils";
import PaginationControls from "./pagination-controls";


interface Word {
  id: number;
  phrase: string;
  pronounciation: string;
  definition: string;
  tags: string;
  audioURL: string
}

type ListProps = {
  page?: number
}

export default async function List({page} : ListProps) {
  
  const curPage = page || 1;
  const {totalCount, phrases} = await getRows(curPage);
  const previousPath = curPage > 1 ? `/?page=${curPage - 1}` : ""
  const nextPath = totalCount > 6 * curPage ?  `/?page=${curPage + 1}` : ""

  return (
      <div className="text-black/50 text-sm sm:px-9 flex flex-col items-center">
        <p className="h-10 text-base">Learn Taiwanese to speak like a local! Taiwania was built by Yushan to teach himself Taiwanese.</p>
        <table className="w-full border-collapse mt-5">
          <thead className="text-emerald-800  border-b">
            <tr>
              <th className="text-left w-1/7 font-weight-450">Phrase</th>
              <th className="text-left font-weight-450">Pronounciation</th>
              <th className="text-left w-1/2 font-weight-450">Definition</th>
              <th className="text-left w-1/7 px-3 font-weight-450">Tags</th>
              <th className="text-center font-weight-450">Audio</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase) => (
              <tr key={phrase.id} className="border-b">
                <td className="py-2">{phrase.phrase}</td>
                <td className="py-2">{phrase.pronounciation}</td>
                <td className="py-2">{phrase.definition}</td>
                <td className="py-2 px-3">{phrase.tags}</td>
                <td className="py-2 px-3 text-left">
                  {phrase.audioURL ? (
                    <a href={phrase.audioURL} target="_blank" rel="noopener noreferrer">
                      Listen
                    </a>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationControls previousPath={previousPath} nextPath={nextPath}/>
      </div>
    )
}
