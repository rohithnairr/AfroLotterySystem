"use clients"
import { client } from "../lib/sanity";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import National from "../components/overviewnational";
import Continental from "../components/overviewcontinental";

// Function to fetch National results from Sanity
async function getNational() {
  const query = `
    *[_type == 'national'] | order(_createdAt desc) {
      dateandtime,
      amount,
      winningnumber
    }
  `;
  return client.fetch(query,{},
    {
      cache:'no-store',
    }
  )
  
}

// Function to fetch Continental results from Sanity
async function getContinental() {
  const query = `
    *[_type == 'continental'] | order(_createdAt desc) {
      dateandtime,
      amount,
      winningnumber
    }
  `;
  return client.fetch(query,{},
    {
      cache:'no-store',
    }
  )
  }

// Main component
export default async function Result() {
  const national = await getNational();
  const continental = await getContinental();

  return (
    <div className="bg-black">
      <div className="container mx-auto p-4 lg:p-8 bg-black">
        <Navbar />
        <div className="lg:border-x lg:border-zinc-700 lg:p-8 p-4">
          <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900">
            <div>
              <h1 className="font-light text-red-500 text-3xl lg:text-5xl mb-2 animate-flip-up">
                Results
              </h1>
              <p className="mt-5 text-white max-w-xl font-thin text-2xl">
                You can find the result of National and Continental games here.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 text-white mt-32">
          {/* National Results */}
          <div className="border border-red-600 rounded-2xl p-4 bg-red-950">
            <h1 className="text-3xl font-regular">National Game Results</h1>
            <p>This Weeks Draw</p>
            {national.map((post, idx) => (
              <ul key={idx} className="list-disc p-4 lg:p-8 font-thin">
                <li>Date and Time: <span className="text-2xl">{post.dateandtime}</span></li>
                <li>This Weeks Winning Amount: <span className="text-4xl font-bold">{post.amount}</span></li>
                <li>Winning Numbers: <span className="text-5xl font-bold">{post.winningnumber}</span></li>
              </ul>
            ))}
          </div>

          {/* Continental Results */}
          <div className="border border-red-600 rounded-2xl p-4 bg-red-950">
            <h1 className="text-3xl font-light">Continental Game Results</h1>
            <p>This Weeks Draw</p>
            {continental.map((post, idx) => (
              <ul key={idx} className="list-disc p-4 lg:p-8 font-thin">
                <li>Date and Time: <span className="text-2xl">{post.dateandtime}</span></li>
                <li>This Weeks Winning Amount: <span className="text-4xl font-bold">{post.amount}</span></li>
                <li>Winning Numbers: <span className="text-5xl font-bold">{post.winningnumber}</span></li>
              </ul>
            ))}
          </div>
        </div>

        <National />
        <Continental />

        <div className="grid grid-cols-1 text-white">
          <h2 className="text-2xl mt-24 font-light">Winning Criteria</h2>
          <p className="font-thin mt-8 mb-8">
            Every week, we conduct a lucky draw at the time specified in the app to select the winning numbers. Here’s how you can win:
          </p>
          <ul className="list-disc font-thin p-4">
            <li>6 Numbers Correct: Win the full amount you played for.</li>
            <li>5 Numbers Correct: Win 50% of the amount you played for.</li>
            <li>4 Numbers Correct: Win 25% of the amount you played for.</li>
            <li>3 Numbers Correct: Win 10% of the amount you played for.</li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
}
