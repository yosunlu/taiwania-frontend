import SectionDevider from "@/components/section-devider";
import HomeTitle from "@/components/home-title";
import List from "@/components/list";

export default function Home({
  searchParams
}:{
  searchParams: {[key: string]: string | string[] | undefined}
  
}) {
  const page = Number(searchParams['page'] ?? '1');
  // const per_page = searchParams['per_page'] ?? '5'
  
  return (
    <main className='flex flex-col mt-2 items-center'>
      
      <HomeTitle/>
      <SectionDevider/>
      <List page={page}/>
      
    </main>
  );
}