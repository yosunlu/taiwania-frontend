import SectionDevider from "@/components/section-devider";
import HomeTitle from "@/components/home-title";
import List from "@/components/list";
import Introduction from "@/components/introduction";
import Filter from "@/components/filter";

export default function Home({
  searchParams
}:{
  searchParams: {[key: string]: string | string[] | undefined}
  
}) {
  const page = Number(searchParams['page'] ?? '1');
  let tag = String(searchParams['tag'] ?? '');
  if(tag){
    tag = tag.split('/')[0];
  }
  
  return (
    <main className='flex flex-col mt-2 items-center'>
      
      <HomeTitle/>
      <SectionDevider/>
      <Introduction/>
      <Filter/>
      <List page={page} tag={tag}/>
      
    </main>
  );
}