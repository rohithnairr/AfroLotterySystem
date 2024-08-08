"use client";

import Image from "next/image"; import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Faqs from "../components/faq";


export default  function FAQ() {



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
            
            </div>
          </div>



        </div>
       
       <Faqs/>

        <Footer />
      </div>
    </div>
  );
}