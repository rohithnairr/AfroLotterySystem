import playstore from "./images/playstore.svg";
import ammachi from "./images/ammachi.svg";
import image from "./images/banner.svg";
import image3 from "./images/image2.svg";
import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";


export default function Home() {

  return (
    < div className="bg-black">
      <div className="container mx-auto p-4 lg:p-8   bg-black ">
        <Navbar />
        <div className="lg:border-x lg:border-zinc-700 lg:p-4  " >
          <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900">
            <div>
              <h1 className="font-light text-red-500 text-3xl lg:text-5xl  mb-2 animate-flip-up   ">
                Have you Tried your luck?
              </h1>
              <p className="mt-5  text-white max-w-sm font-thin  text-2xl">
                Why are you waiting ?
              </p>
              
              <p className="pt-5 pb-14 text-gray-300 max-w-md font-thin text-base lg:text-l">
                Discover Afro lottery System (ALS), your gateway to thrilling
                lottery experiences in Africa. ALS, powered by <b>CrowdAfrik</b>, brings
                you exciting opportunities to test your luck and win big prizes.{" "}
              </p>
              <div>
             
              <a className="text-white mt-4 font-light  text-center px-8 py-4 border max-w-72 rounded-3xl border-white  hover:bg-red-800 hover:text-white " href="/form"> Become an agent</a>

              </div>
           
            </div>
            <div className="">
              <Image
                className="max-w-xl max-h-l mx-auto w-full  md:w-fit lg:w-screen "
                src={image}
                alt="image"
              />
            </div>
          </div>

          <div className="grid gap-4 lg:mt-52 mt-32 grid-cols-1 text-grey-900  ">
            <h2 className="font-light text-gray-100 text-2xl text-center lg:text-4xl  mb-2 animate-flip-up">Download Out App and start<span className="text-red-500"> Playing Now !</span></h2>
            <div className="block mx-auto">
              <a className="block mx-auto" href="#">
                <Image
                  className="max-w-ls   w-44 lg:w-80 "
                  src={playstore}
                  alt="image"
                />

              </a>
            </div>
            <div>
              <a className="block mx-auto" href="#">
                <Image
                  className="w-auto"
                  src={image3}
                  alt="image"
                />

              </a>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:mt-52 mt-32  text-grey-900" >

            <h3 className="text-gray-100 text-3xl font-light text-center ">Afro Lottery System </h3>
            <p className="text-gray-100 text-left lg:text-center mt-8 text-l font-thin">Discover Afro Lottery System -ALS, your gateway to thrilling lottery  experiences in Africa. ALS, powered by CrowdAfrik, brings you exciting  opportunities to test your luck and win big prizes. Our user-friendly  app lets you participate in weekly draws, where you can select 6 numbers  and stand a chance to win enticing rewards. Explore ALS now and join  thousands of players in the ultimate quest for fortune and excitement</p>
            <a href="wwww.crowdafrik.com" className="text-white mt-8 font-light text-center px-4 py-4 border max-w-72 rounded-3xl border-white mx-auto hover:bg-red-700 hover:text-white">
              Visit our Parent Organisation
            </a>
          </div>

          <div className="grid grid-cols-1  lg:mt-52 mt-32 text-grey-900" >

            <h3 className="text-gray-100 text-3xl font-light text-center ">How to Play</h3>
            <p className="text-gray-100 text-left lg:text-center  mt-8 text-l font-thin">ALS  operates through a user-friendly mobile application and also kiosk  devices, allowing participants to select 6 numbers between 1-60 for each  draw. Utilising a robust algorithm, ALS ensures fair and random  selection of winning combinations. Prizes are awarded for correct  guesses of 6, 5, 4, and 3 digit combinations, with automatic  distribution linked to user accounts for seamless redemption.</p>
            <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
              <div>
                <h2 className="lg:text-4xl text-2xl text-white">Play ALS from <span className="text-red-500">App</span></h2>
              </div>
              <div>
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc p-4 ">
                
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

            </div>


            <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
              <div>
                <h2 className="lg:text-4xl text-2xl text-white">Play ALS using <span className="text-red-500">Kiosk Device</span></h2>
              </div>

              <div>
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc p-4">
                  <li>Pay for the voucher card</li>
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
