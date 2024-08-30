import TagControls from "./tag-controls";

export default function Filter() {
  const tags = [
    "praise",
    "funny",
    "hardship",
    "gratitude",
    "casual",
    "wisdom",
    "question",
    "encourage",
    "humorous",
    "relationships",
    "perseverance",
    "success",
    "encouragement",
  ];
  return (
    <div className="flex mb-5 py-2 text-black/50 flex-wrap justify-center w-[70%] gap-1" >
      <TagControls tag={"Proverb"} displayName={"Proverb"} />
      <div className="ml-1" />
      <TagControls tag={"EL"} displayName="Everyday Language (EL)" />
      {tags.map((tag, index) => (
        <span key={index} className="ml-1">
          <TagControls tag={tag} displayName={tag} />
        </span>
      ))}
    </div>
  );
}
