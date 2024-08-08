import playstore from "../images/playstore.svg";
import ammachi from "../images/ammachi.svg";
import image from "../images/coins.png";
import hand from "../images/hand.png";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Link from "next/link";


export default function About() {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-4 lg:p-8   bg-black ">
        <Navbar />
        <div className="lg:border-x lg:border-zinc-700 lg:p-8 p-4  " >
          <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900">
            <div>
              <h1 className="font-light text-red-500 text-3xl lg:text-5xl  mb-2 animate-flip-up   ">
                About ALS
              </h1>
              <p className="mt-5  text-white max-w-sm font-thin  text-2xl">
                Welcome to ALS
              </p>

              <p className="pt-5 pb-14 text-gray-300 max-w-md font-thin text-base lg:text-l">
                At ALS, we believe in the power of games to transform lives. ALS is not just about winning; its about creating opportunities and driving positive change. Our unique approach ensures that every ticket purchased contributes to a larger purpose—funding businesses and fostering economic growth across Africa through our partnership with CrowdAfrik.
              </p>
              <div>

                <a className="text-white mt-4 font-light  text-center px-8 py-4 border max-w-72 rounded-3xl border-white  hover:bg-red-800 hover:text-white " href="/form"> Work with Us</a>

              </div>

            </div>
            <div className="">
              <Image
                className="max-w-xl mx-auto w-full  md:w-fit lg:w-screen "
                src={hand}
                alt="image"
              />
            </div>
          </div>


          <div className="grid grid-cols-1  lg:mt-52 mt-32 text-grey-900" >

            <div className="grid lg:grid-cols-2 gap-4  lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
              <div>
                <h2 className="lg:text-4xl text-2xl text-white">How ALS is Different
                </h2>
              </div>
              <div>
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc ">
                  <li>
                    <b>Community Impact</b>: Unlike traditional gaming companies, ALS reinvests its profits directly into the community. Through our collaboration with CrowdAfrik, we fund small and medium-sized businesses, helping them thrive and contribute to the local economy.
                  </li>
                  <li className="mt-4">
                    <b>National and Continental Games</b>: We offer two exciting game options—ALS National Game, focusing on individual African countries, and ALS Continental Game, spanning multiple African nations. This diverse offering ensures everyone can participate and have a chance to win.
                  </li>
                  <li className="mt-4">
                    <b>Transparent Operations</b>: At ALS, transparency is key. We are committed to fair play and maintaining the highest standards of integrity in all our games. Players can trust that our games are conducted with utmost fairness.
                  </li>

                </ul>
              </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-4 lg:mt-52 mt-32 sm:grid-cols-1 md:grid-cols-2 bg-red-950  text-grey-900">

              <div className="lg:px-16 px-8 py-8 lg:py-0">
                <h2 className="text-white font-light lg:mt-16 text-2xl lg:text-4xl">Impact on Community</h2>
                <div className="mt-8 ">
                  <p className=" pb-14 text-gray-300 font-thin text-base lg:text-l">
                    Every time you participate in an ALS game, youre not just playing to win; youre playing to make a difference. The profits from ALS games are channelled into CrowdAfrik, where they are used to fund businesses and projects that drive economic growth. This unique model ensures that the benefits of our success are felt by communities across Africa.
                  </p>
                </div>


              </div>
              <div>
                <Image
                  className="lg:max-w-xl"
                  src={image}
                  alt="image"
                />
              </div>
            </div>


            <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
              <div>
                <h2 className="lg:text-4xl text-left text-2xl text-white">Our Mission</h2>
                <p className="text-gray-100 text-left mt-8 text-l font-thin">Our mission at ALS is to leverage the power of gaming to create a sustainable and thriving economic environment in Africa. We aim to:
                </p>


              </div>


              <div>
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc p-4">
                  <li> <b>Empower Entrepreneurs</b>: By reinvesting profits into local businesses through CrowdAfrik, we help entrepreneurs gain access to the funds they need to grow and succeed.
                  </li>
                  <li className="mt-4"><b>Foster Economic Growth</b>: Our initiatives contribute significantly to the economic development of African nations, providing jobs and improving living standards.
                  </li>
                  <li className="mt-4">
                    <b>Promote Fair Play</b>: We are dedicated to providing a safe, transparent, and enjoyable gaming experience for all our players.
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-4 lg:mt-52 mt-32 pb-16 sm:grid-cols-1 md:grid-cols-2 bg-red-950  text-grey-900">

            <div className="lg:px-16 px-8 py-8 lg:py-0">
              <h2 className="text-white font-light lg:mt-16 text-2xl lg:text-4xl">Join Us in Making a Difference
              </h2>
              <div className="mt-8 ml-4">
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc ">
                  <li>
                    By playing ALS games, you become a part of a larger mission to support economic development and create opportunities across Africa. Whether you play the ALS National Game or the ALS Continental Game, your participation helps us reinvest in communities and build a brighter future for all.

                  </li>
                </ul>

              </div>
              <div className="block mx-auto">
              <a className="block mx-auto mt-8" href="#">
                <Image
                  className="max-w-ls   w-44 lg:w-80 "
                  src={playstore}
                  alt="image"
                />

              </a>
            </div>
            

            </div>
            <div>
              <Image
                className="lg:max-w-xl"
                src={ammachi}
                alt="image"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
