import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
 const query = (await searchParams).query;
  
 const posts = [{
  _createdAt: new Date(),
  views: 55,
  _id: 1,
  author: {_id: 1, name: 'Kenneth'},
  description: "This is a description",
  image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  category: "Coded",
  title: "Code it"
 }]
 
 return (
    <>
    <section className="w-full bg-pink-500 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">

       <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center- my-5">Tone your startup, <br /> Connect with Entrepreneurs</h1>
       <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">Submit Ideas, Vote on Tones, and Get Noticed in Virtual Competitions.</p>
       <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"`: 'All Startups'}
      </p>
      <ul className="mt-7 card_grid">
       {posts?. length > 0 ? (
         posts.map((post: StartUpCardType, index: number, )=> (<StartupCard key={post?._id} post={post}/>))
       ): (
        <p className="no-results">No Startups found</p>
       )}
      </ul>
    </section>
    
    </>
  );
}

