import SectionDevider from "@/components/section-devider";
import HomeTitle from "@/components/home-title";
import List from "@/components/list";
import Introduction from "@/components/introduction";
import Filter from "@/components/filter";
import SearchForm from "@/components/search-form";

export default function Home({
  searchParams
}:{
  searchParams: {[key: string]: string | string[] | undefined}
  
}) {

  const page = Number(searchParams['page'] ?? '1');
  let tag = String(searchParams['tag'] ?? '');
  let keyword = String(searchParams['keyword'] ?? '');

  if(tag){
    tag = tag.split('/')[0];
    // console.log(tag)
  }
  
  if(keyword){
    keyword = keyword.split('/')[0];
    // console.log(keyword)
  }
  
  return (
    <main className='flex flex-col mt-2 items-center'>
      
      <HomeTitle/>
      <SectionDevider/>
      <Introduction/>
      <SectionDevider/>
      <SearchForm/>
      <Filter/>
      <List page={page} tag={tag} keyword={keyword}/>
      
    </main>
  );
}