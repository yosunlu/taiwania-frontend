import { getRows } from "@/lib/server_utils";
import PaginationControls from "./pagination-controls";
import TagControls from "./tag-controls";


type ListProps = {
  page?: number
  tag?: string
}

export default async function List({page, tag} : ListProps) {
  
  const curPage = page || 1;
  let phrases = [];
  let previousPath = "";
  let nextPath = "";

  const { totalCount, phrases: fetchedPhrases } = await getRows(curPage, tag || "");
  phrases = fetchedPhrases;
  
  previousPath = curPage > 1 ? `/?page=${curPage - 1}` + (tag ? `&tag=${tag}` : "") : "";
  nextPath = totalCount > 10 * curPage ? `/?page=${curPage + 1}` + (tag ? `&tag=${tag}` : "") : "";

  return (
      <div className="text-black/50 text-sm sm:px-9 items-center min-w-full">
        <table className="w-full border-collapse mt-5 min-w-full">
          <thead className="text-emerald-800  border-b">
            <tr>
              <th className="text-left w-1/7 font-weight-450">Phrase</th>
              <th className="text-left font-weight-450">Pronounciation</th>
              <th className="text-left font-weight-450">Mandarin</th>
              <th className="text-left w-1/3 font-weight-450">Definition</th>
              <th className="text-left font-weight-450">Usage</th>
              <th className="text-left font-weight-450">Tags</th>
              <th className="text-left font-weight-450">Audio</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase) => (
              <tr key={phrase.id} className="border-b hover:text-emerald-900 transition">
                <td className="py-2 pr-5 max-w-[100px] align-baseline">{phrase.phrase}</td>
                <td className="py-2 pr-5 max-w-[120px] align-baseline">{phrase.pronounciation}</td>
                <td className="py-2 pr-5 max-w-[160px] align-baseline">{phrase.mandarin}</td>
                <td className="py-2 pr-5 align-baseline">{phrase.definition}</td>
                <td className="py-2 pr-5 align-baseline">
                  <TagControls tag={phrase.usage} displayName={phrase.usage}/>
                </td>
                <td className="py-1 pr-5 flex flex-col align-baseline">
                    {phrase.tags.map((tag, index) => (
                      <span key={index} className="mr-2 py-0.3">
                        <TagControls tag={tag} displayName={tag}/>
                      </span>
                    ))}
                </td>
                <td className="py-2 align-baseline">
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
