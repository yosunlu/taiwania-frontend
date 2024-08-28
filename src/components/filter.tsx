
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
    <div className="flex mb-5 py-1 text-black/50">
        <TagControls tag={"Proverb"} displayName={"Proverb"}/>
        <div className="ml-1"/>
        <TagControls tag={"EL"} displayName="Everyday Language (EL)"/>
        {tags.map((tag, index) =>(
        <span key={index} className="ml-1">
            <TagControls tag={tag} displayName={tag}/>
        </span>  
        ))}
    </div>
  )
}
