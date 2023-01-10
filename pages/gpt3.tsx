import Head from "next/head";
import { useState, useEffect, Fragment, useRef, useCallback } from "react";
import Link from "next/link";
import confetti from 'confetti-js';


export default function Home() {
  // React Hooks
  const [data, setData] = useState({ text: "" });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);    



  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const res = await fetch(`/api/openai`, {
          body: JSON.stringify({
            name: search,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  // What we want to render
  return (
    <Fragment>
      <Head>
        <title>Magic Postcard Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-zinc-200 min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <main className="flex flex-col items-center justify-center max-w-3xl ">
            <p className=" text-5xl">🧙‍♂️</p>
          <h1 className="text-5xl text-center font-extrabold text-slate-800 drop-shadow sm:text-5xl mb-8">
            Magic Postcard Creator
          </h1>
         

          {/* Card & Input field  */}
          <div className="text-center relative backdrop-filter overflow-hidden mb-6 max-w w-full rounded-md bg-white  p-4 ">
            <textarea
              className="text-transparent text-lg bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-400 rounded-md px-3 py-2 mb-4 max-w shadow-sm  min-h-64  block w-full border bg-white"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Write your awesome text description..."
            />

           {/* Button to that calls API */}
           <button
                
              className="px-8 py-3 mt-2 mb-4 shadow-sm text-5xl font-medium rounded-full text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-purple-500 to-cyan-400 hover:bg-cyan-400 hover:shadow-lg"
              type="submit"
              onClick={(e) => setSearch(query)}
            >
              🪄
            </button>


            {/* Magic Text Output field */}
            <div className="mt-5 bg-grey-200 p-5 text-m text-gray-900  border-slate-200 rounded-md">
              {isLoading ? <div>Loading ...</div> : <span contentEditable="true"> {data.text} </span>}
              {/* {lorem} */}
            </div>
            <div className="flex flex-row justify-between mt-8 pt-8">
          

        
      </div>

          </div>

          {/* Back/Next Buttons */}
            <div className="flex flex-row">
          <Link href="/">
            <button className="min-h-[40px] mt-5 shadow-sm sm:w-[100px] py-2 justify-center font-medium px-4 mb-10 bg-grey-800 text-white bg-gray-400 sm:ml-2 rounded-md hover:bg-cyan-400 hover:shadow-lg"
            >Back</button>
            </Link>
             
            <button 
                className="min-h-[40px] mt-5 shadow-sm sm:w-[100px] py-2 inline-flex justify-center font-medium px-4 mb-10 bg-grey-800 text-white bg-gray-800 sm:ml-2 rounded-md hover:bg-cyan-400 hover:shadow-lg"
            >Next
            </button>
            </div>
        </main>
      </div>
    </Fragment>
  );
}
