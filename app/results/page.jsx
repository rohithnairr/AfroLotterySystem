import { client } from "../lib/sanity";
import Image from "next/image"; import Navbar from "../components/navbar";
import Footer from "../components/footer";
import National from "../components/overviewnational"
import Continental from "../components/overviewcontinental"
import { urlFor } from "../lib/sanity"; // Make sure you have this function exported from your sanity configuration

async function getNational() {
    const query = `
  *[_type == 'national'] | order(_createdAt desc){
 dateandtime,amount,winningnumber
}`;



    const national = await client.fetch(query);
    return national;
}

async function getContinental() {
    const query = `
  *[_type == 'continental'] | order(_createdAt desc){
 dateandtime,amount,winningnumber
}`;



    const national = await client.fetch(query);
    return national;
}


export default async function Result() {
    const national = await getNational();
    const continental = await getContinental();


    return (
        <div className="bg-black">
            <div className="container mx-auto p-4 lg:p-8   bg-black ">
                <Navbar />
                <div className="lg:border-x lg:border-zinc-700 lg:p-8 p-4  " >
                    <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900">
                        <div>
                            <h1 className="font-light text-red-500 text-3xl lg:text-5xl  mb-2 animate-flip-up   ">
                                Results
                            </h1>
                            <p className="mt-5  text-white max-w-xl font-thin  text-2xl">
                                You can find the result of National and Continental games here.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 text-white mt-32">

                    <div className="border border-red-600 rounded-2xl p-4 bg-red-950">
                        {national.map((post, idx) =>
                        (
                            <div key={idx} >
                                <h1 className="text-3xl font-regular">National Game Results</h1>
                                <p>This Week's Draw</p>
                                <ul className="list-disc p-4 lg:p-8 font-thin">
                                    <li>Date and Time :&nbsp; <span className="text-2xl">{post.dateandtime}</span> </li>
                                    <li>This Week’s Winning Amount:&nbsp; <span className="text-4xl font-bold">{post.amount}</span> </li>
                                    <li>Winning Numbers: &nbsp; <span className="text-5xl font-bold">{post.winningnumber}</span> </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border border-red-600 rounded-2xl p-4 bg-red-950">
                        {continental.map((post, idx) =>
                        (
                            <div key={idx} >
                                <h1 className="text-3xl font-light">National Game Results</h1>
                                <p>This Week's Draw</p>
                                <ul className="list-disc p-4 lg:p-8 font-thin">
                                    <li>Date and Time :&nbsp; <span className="text-2xl">{post.dateandtime}</span> </li>
                                    <li>This Week’s Winning Amount:&nbsp; <span className="text-4xl font-bold">{post.amount}</span> </li>
                                    <li>Winning Numbers: &nbsp; <span className="text-5xl font-bold">{post.winningnumber}</span> </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <National />
                <Continental />
                <div className="grid grid-cols-1 text-white">
                    <h2 className="text-2xl mt-24 font-light ">How to play</h2>
                    <p className="font-thin mt-8 mb-8">Every week, we conduct a lucky draw at the time specified in the app to select the winning numbers. Here’s how you can win:
                    </p>
                    <ul className="list-disc font-thin p-4">
                        <li>6 Numbers Correct: Win the full amount you played for.
                        </li>
                        <li>5 Numbers Correct: Win % of the amount you played for.
                        </li>
                        <li>4 Numbers Correct: Win % of the amount you played for.

                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </div>
    );
}