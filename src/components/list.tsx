import { getRows } from "@/lib/server_utils";
import PaginationControls from "./pagination-controls";
import TagControls from "./tag-controls";

type ListProps = {
  page?: number;
  tag?: string;
  keyword?: string;
};

export default async function List({ page, tag, keyword }: ListProps) {
  const curPage = page || 1;
  let phrases = [];
  let previousPath = "";
  let nextPath = "";

  const { totalCount, phrases: fetchedPhrases } = await getRows(
    curPage,
    tag || "",
    keyword || ""
  );
  phrases = fetchedPhrases;

  previousPath =
    curPage > 1 ? `/?page=${curPage - 1}` + (tag ? `&tag=${tag}` : "") + (keyword? `&keyword=${keyword}` : ""): "";
  nextPath =
    totalCount > 10 * curPage
      ? `/?page=${curPage + 1}` + (tag ? `&tag=${tag}` : "") + (keyword? `&keyword=${keyword}` : "")
      : "";

  return (
    <div className="text-black/50 text-sm sm:px-9 items-center min-w-full">
      <table className="w-full border-collapse mt-5 min-w-full table-fixed mb-3">
        <thead className="text-emerald-800 border-b">
          <tr>
            <th className="w-[9rem] text-left font-weight-450">Phrase</th>
            <th className="w-[9rem] text-left font-weight-450 pl-2">
              Pronounciation
            </th>
            <th className="w-[9rem] text-left font-weight-450 pl-2">
              Mandarin
            </th>
            <th className="w-[23rem] text-left font-weight-450 pl-2">
              Definition
            </th>
            <th className="w-[7rem] text-left font-weight-450 pl-2">Usage</th>
            <th className="w-[7rem] text-left font-weight-450">Tags</th>
            <th className="text-left font-weight-450">Audio</th>
          </tr>
        </thead>
        <tbody>
          {phrases.map((phrase) => (
            <tr
              key={phrase.id}
              className="border-b  hover:text-emerald-900 hover:bg-emerald-50 transition"
            >
              <td className="align-baseline py-2">{phrase.phrase}</td>
              <td className="align-baseline pl-2 py-2">
                {phrase.pronounciation}
              </td>
              <td className="align-baseline pl-2 py-2">{phrase.mandarin}</td>
              <td className="align-baseline pl-2 py-2">{phrase.definition}</td>
              <td className="align-baseline pl-2 py-2">
                <TagControls tag={phrase.usage} displayName={phrase.usage} />
              </td>
              <td className="pr-5 py-2 flex flex-col align-baseline">
                {phrase.tags.map((tag, index) => (
                  <span key={index} className="mr-2 py-0.3">
                    <TagControls tag={tag} displayName={tag} />
                  </span>
                ))}
              </td>
              <td className="align-baseline py-2">
                {phrase.audioURL ? (
                  <a
                    href={phrase.audioURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </div>
  );
}
