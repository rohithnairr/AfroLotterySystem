import { client } from "../lib/sanity";
import Image from "next/image"; import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { urlFor } from "../lib/sanity"; // Make sure you have this function exported from your sanity configuration

async function getData() {
  const query = `
  *[_type == 'faq'] | order(_createdAt desc) {
    question,
    answer
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function FAQ() {
  const data = await getData();


  return (
    <div className="bg-black">
      <div className="container mx-auto p-4 lg:p-8   bg-black ">
        <Navbar />
        <div className="lg:border-x lg:border-zinc-700 lg:p-8 p-4  " >
          <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900">
            <div>
              <h1 className="font-light text-red-500 text-3xl lg:text-5xl  mb-2 animate-flip-up">
                Frequently Asked Question
              </h1>
              <p className="mt-5  text-white max-w-sm font-thin  text-2xl">
                Welcome to ALS
              </p>
            </div>
          </div>



        </div>
        <div className="p-8">
        {data.map((post, idx) =>
        (
          <div key={idx} >
        <ul className="text-white">
          <li  className="list-disc mt-8">{post.question}<br/><span className="font-thin ">{post.answer}</span></li>
        </ul>
        </div>
        ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}