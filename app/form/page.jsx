"use client"

import Navbar from "../components/navbar";
import ContactForm from "./ContactForm"
import Footer from "../components/footer";
import ammachi from "../images/ammachi.svg";

import Image from "next/image";
import Career from "../components/careers";

export default function Form() {

  return (
    < div className="bg-black ">
      <div className="container mx-auto p-4 lg:p-8  bg-black ">
        <Navbar />
        <h2 className="font-light text-gray-100 text-2xl text-left mt-16 lg:text-3xl  animate-flip-up">Become a Super Agent
        </h2>
        <p className="font-thin text-gray-100 text-l text-left mt-4 lg:text-l  animate-flip-up">Join ALS as a Super Agent and be part of a thriving network. As a Super Agent, you will play a crucial role in expanding our reach and maximizing sales. Earn commissions and be a key player in our success story.
        </p>
        <p className=" text-2xl mt-16 text-white font-light">Benefits</p>
        <ul className="list-disc  text-white font-thin p-4">
          <li>Attractive commission rates</li>
          <li>Comprehensive training and support</li>
          <li>Be part of a growing community</li>
        </ul>
        <ContactForm />

        <div className="grid grid-cols-1 mt-16">
          <h2 className="font-light text-gray-100 text-2xl text-left mt-16 lg:text-3xl  animate-flip-up">Career Opportunities</h2>
          <p className="font-thin text-gray-100 text-l text-left mt-4 lg:text-l  animate-flip-up">ALS is always looking for talented individuals to join our team. If you are passionate, driven, and looking for a rewarding career, explore the opportunities we have to offer.
          </p>
          <Career/>

        </div>
        <div className="grid lg:grid-cols-2 gap-4 lg:mt-52 mt-32 sm:grid-cols-1 md:grid-cols-2 bg-red-950  text-grey-900">

<div className="lg:px-16 px-8 py-8 lg:py-0">
  <h2 className="text-white font-light lg:mt-32 text-2xl lg:text-4xl">Connect with Us</h2>
  <div className="mt-8 ml-4">
    <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc ">
      <li>
        We are available 24 x 7 for your help !
      </li>
    </ul>
  </div>
  <div className="mt-8">
    <a href="wwww.crowdafrik.com" className="text-white mt-8 font-light text-center px-4 py-4 border max-w-72 rounded-3xl border-white mx-auto hover:bg-red-900 hover:text-white">
      Connect
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
        
        <Footer />
      </div>
    </div>
  );
}
