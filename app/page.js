import image1 from "./images/image2.png";

import image2 from "./images/image3.webp";
import image from "./images/banner.webp";
import image3 from "./images/logo.svg";
import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 lg:p-8 font-jakarta bg-blue-gray-100 text-black ">
        <Navbar />
        <div className="grid lg:grid-cols-2 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
          <div className="mt-0 lg:mt-10 md:mt-20" data-aos="fade-right">
            <h1 className="font-bold text-white text-4xl lg:text-5xl font-Jakarta pb-2 animate-flip-up   ">
              Have you Tried your luck?
            </h1>
            <p className="pt-5  text-white max-w-sm font-regular font-Jakarta text-xl">
              Why are you waiting ?
            </p>
            <p className="pt-5 pb-14 text-gray-300 max-w-md font-thin font-Jakarta text-l">
              Discover Afro lottery System (ALS), your gateway to thrilling
              lottery experiences in Africa. ALS, powered by CrowdAfrik, brings
              you exciting opportunities to test your luck and win big prizes.{" "}
            </p>
            <Link href="download" className="">
              <p
                className="text-l text-center mt-8 bg-slate-50 font-Jakarta font-bold text-black px-8 py-4 border-2 border-white p-12 rounded-full"
                href="#"
              >
                Download Our App &nbsp; &#128640;
              </p>
            </Link>
          </div>
          <div className=" lg:mt-0">
            <Image
              className="max-w-xl max-h-l mx-auto w-full  md:w-fit lg:w-screen "
              src={image}
              alt="image"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2  bg-gradient-to-tl from-neutral-800 to-slate-900  backdrop-blur-sm border border-gray-700 rounded-xl pt-12">
          <div className=" text-center px-4 lg:mt-24 lg:text-left lg:ml-12 ">
            <h1 className="font-bold max-w-l text-gray-100 text-3xl lg:text-4xl font-Jakarta pb-4 ">
              Download Out App and start{" "}
              <span className="bg-gradient-to-b from-lime-400 to-lime-500 bg-clip-text text-transparent">
                playing Now !
              </span>
            </h1>
          </div>
          <div className="ps-4 pr-4">
            <Image
              className="max-w-md max-h-l mx-auto w-full  md:w-fit lg:w-screen "
              src={image2}
              alt="image"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2text-grey-900 mt-8 backdrop-blur-sm ">
          <div className="p-12 bg-gradient-to-tr from-neutral-800 to-slate-900 rounded-xl backdrop-blur-sm border border-gray-700 ">
            <Image
              className="max-w-xs mt-8 lg:mt-12 max-h-sm mx-auto w-full  md:w-fit lg:w-screen  "
              src={image3}
              alt="image"
            />
          </div>
          <div className=" text-centerlg:mt-32 p-12 lg:text-left  bg-gradient-to-tl from-neutral-800 to-slate-900 rounded-xl backdrop-blur-sm border border-gray-700">
            <h3 className="font-bold max-w-l text-gray-100 text-xl lg:text-xl font-Jakarta  ">
              Afro Lottery System{" "}
            </h3>
            <p className="pt-5 pb-14 text-gray-200 max-w-md font-thin font-Jakarta text-l">
              Discover Afro Lottery System (ALS), your gateway to thrilling
              lottery experiences in Africa. ALS, powered by CrowdAfrik, brings
              you exciting opportunities to test your luck and win big prizes.
              Our user-friendly app lets you participate in weekly draws, where
              you can select 6 numbers and stand a chance to win enticing
              rewards. Explore ALS now and join thousands of players in the
              ultimate quest for fortune and excitement{" "}
            </p>
            <p
              className="text-sm mt-8 font-Jakarta font-bold text-gray-100 px-8 py-4 border-2 border-gray-100 p-12 rounded-full"
              href="#"
            >
              Visit Our parent organisation
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 animate-fade-up  text-center"
          id="services"
        >
          <h2 className="font-bold text-gray-100 text-center text-2xl lg:text-4xl font-Jakarta mt-24 pb-4 lg:mt-32 max-w-l ">
            How to play{" "}
          </h2>
          <p className="font-thin mx-auto  text-gray-300 text-l lg:text-l font-Jakarta mt-4 pb-4 text-center max-w-5xl">
            ALS operates through a user-friendly mobile application and also
            kiosk devices, allowing participants to select 6 numbers between
            1-60 for each draw. Utilising a robust algorithm, ALS ensures fair
            and random selection of winning combinations. Prizes are awarded for
            correct guesses of 6, 5, 4, and 3 digit combinations, with automatic
            distribution linked to user accounts for seamless redemption.{" "}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2text-grey-900 mt-8 backdrop-blur-sm ">
          <div className=" text-centerlg:mt-32 p-16 lg:text-left bg-gradient-to-tr from-neutral-800 to-slate-900 rounded-xl border border-gray-700 ">
            <h3 className="font-bold text-gray-100 text-xl lg:text-xl font-Jakarta  ">
              How to Play ALS using the app
            </h3>
            <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc mt-8">
              <li className="mt-4">
                Download the App:  (Download button for appstore and playstore
                with embedded link)
              </li>
              <li className="mt-4">
                Create an Account: Sign up with your details to get started.
              </li>
              <li className="mt-4">
                Click play game, then confirm the type of play (Continental play
                (all over Africa) or National and  Select level of play (Level
                1,2 or 3)
              </li>
              <li className="mt-4">
                Select Numbers: Choose 6 numbers between 1-60.
              </li>
              <li className="mt-4">
                Confirm and Pay: Review your selection and make the payment
                using available methods.
              </li>
              <li className="mt-4">
                Await Lucky Draw Results: Stay tuned for weekly draw results via
                app notifications.
              </li>
              <li className="mt-4">
                Claim Your Prize: If you win, prizes are automatically credited
                to your account.
              </li>
              <li className="mt-4">
                Repeat and Enjoy: Keep playing for more chances to win!
              </li>
            </ul>
          </div>
          <div className=" text-centerlg:mt-32 p-16 lg:text-left bg-gradient-to-tl from-neutral-800 to-slate-900 rounded-xl backdrop-blur-sm border border-gray-700">
            <h3 className="font-bold text-gray-100 text-xl lg:text-xl font-Jakarta  ">
              How to Play ALS using the Kiosk device
            </h3>
            <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc mt-8">
              <li className="mt-4">Pay for the voucher card</li>
              <li className="mt-4">Enter the voucher code at the kiosk</li>
              <li className="mt-4">
                Click play game, then confirm the type of play (Continental play
                (all over Africa) or National and  Select level of play (Level
                1,2 or 3)
              </li>
              <li className="mt-4">
                Select Numbers: Choose 6 numbers between 1-60.
              </li>
              <li className="mt-4">
                Confirm and Pay: Review your selection and make the payment
                using available methods.
              </li>
              <li className="mt-4">
                Get Transaction ID: Receive a unique transaction ID for your
                entry.
              </li>
              <li className="mt-4">
                Await Draw Results: Stay tuned for weekly draw results via app
                notifications.
              </li>
              <li className="mt-4">
                Claim Your Prize: If you win, prizes are automatically credited
                to your account.
              </li>
              <li className="mt-4">
                Repeat and Enjoy: Keep playing for more chances to win!
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
