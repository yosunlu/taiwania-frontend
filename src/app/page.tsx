import SectionDevider from "@/components/section-devider";
import HomeTitle from "@/components/home-title";
import List from "@/components/list";

export default function Home() {
  return (
    <main className='flex flex-col mt-2 items-center'>
      
      <HomeTitle/>
      <SectionDevider/>
      <List/>
      
      
    </main>
  );
}

