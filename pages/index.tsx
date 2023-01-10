import cn from "classnames";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useInterval } from "../utils/use-interval";
import Link from "next/link";


export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageId, setMessageId] = useState("");
  const [image, setImage] = useState(null);
  const [canShowImage, setCanShowImage] = useState(false);


  useInterval(
    async () => {
      const res = await fetch(`/api/poll?id=${messageId}`);
      const json = await res.json();
      if (res.status === 200) {
        setLoading(false);
        setImage(json.data[0].url);
      }
    },
    loading ? 1000 : null
  );

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    toast("Generating your image...", { position: "top-center" });
    const response = await fetch(`/api/image?prompt=${prompt}`);
    const json = await response.json();
    setMessageId(json.id);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



  const showLoadingState = loading || (image && !canShowImage);

  return (
    <>
      <Head>
        <title>Magic Postcard Creator</title>
      </Head>
      <div className="md:grid md:place-content-center antialiased mx-auto px-4 py-20 h-screen bg-zinc-200">
        <Toaster />
        <div className="flex flex-col items-center md:place-items-center">
          <p className=" text-5xl">🧙‍♂️</p>
          <h1 className="text-5xl tracking-tighter drop-shadow text-center pb-10 font-bold text-gray-800">
            Magic Postcard Creator
          </h1>
          
          <form
            className="flex w-full sm:w-auto flex-col sm:flex-row mb-10"
            onSubmit={submitForm}
          >
            <input
              className="shadow-sm text-gray-900 text-lg rounded-md px-3 py-2 mb-4 sm:mb-0 sm:min-w-[600px] "
              type="text"
              placeholder="Write your awesome image description..."
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              className="shadow-sm px-8 py-2 inline-flex justify-center font-medium text-5xl items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-purple-500 to-cyan-400 text-gray-100 sm:ml-2 rounded-full hover:bg-cyan-400 hover:shadow-lg"
              type="submit"
            >
              {showLoadingState && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {!showLoadingState ? "🪄" : ""}
            </button>
          </form>
          <div className="relative flex w-full items-center justify-center">
            {image && (
              <div className="w-full sm:w-[400px] h-[400px] rounded-md shadow-md relative">
                <Image
                  alt={`Postcard of: ${prompt}`}
                  className={cn(
                    "opacity-0 duration-1000 ease-in-out rounded-md shadow-md h-full object-cover",
                    { "opacity-100": canShowImage }
                  )}
                  src={image}
                  fill={true}
                  onLoadingComplete={() => {
                    setCanShowImage(true);
                  }}
                />
              </div>
            )}

            <div
              className={cn(
                "w-full sm:w-[400px] absolute top-0.5 overflow-hidden rounded-2xl bg-white/5 shadow-xl shadow-black/5",
                {
                  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-500/10 before:to-transparent":
                    showLoadingState,
                  "opacity-0 shadow-none": canShowImage,
                }
              )}
            >
              <div
                className={cn(
                  "w-full sm:w-[400px] h-[400px] bg-white rounded-md shadow-md flex items-center justify-center"
                )}
              >
                <p className="uppercase font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-center">
                  {showLoadingState
                    ? "Generating magic...."
                    : "Start magic"}
                </p>

              </div>
              
            </div>
           
          </div>

        </div>

        <div className="w-full sm:w-[400px] h-[410px]"></div>

        <div className="flex  items-end justify-center mb-10">
          
            <Link href="/gpt3">
            <button className="min-h-[40px]  mt-8 shadow-sm sm:w-[100px] py-2 inline-flex justify-center font-medium px-4 mb-10 bg-grey-800 text-white bg-gray-800 sm:ml-2 rounded-md hover:bg-cyan-400 hover:shadow-lg"
            >Next
            </button>
            </Link>
          
        </div>

      </div>
    </>
  );
}
