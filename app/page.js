import playstore from "./images/playstore.svg";
import ammachi from "./images/ammachi.svg";
import image from "./images/banner.svg";
import image3 from "./images/image2.svg";
import Alsapp from "./images/alsapp.svg";
import kiosk from "./images/kiosk.svg";

import Scratch from "./images/alscratch.svg";
import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";


export default function Home() {

  return (
    < div className="bg-black">
      <div className="container mx-auto p-4 lg:p-8   bg-black ">
        <Navbar />
        <div className=" lg:p-4  " >
          <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900">
            <div>
              <h1 className="font-light text-red-500 text-3xl lg:text-5xl  mb-2 animate-flip-up   ">
                Have you Tried your luck?
              </h1>
              <p className="mt-5  text-white max-w-sm font-thin  text-2xl">
                Why are you waiting ?
              </p>

              <p className="pt-5 pb-14 text-gray-300 max-w-md font-thin text-base lg:text-l">
                Discover Afro lottery Systems (ALS), your gateway to thrilling
                lottery experiences in Africa. ALS, powered by <b>CrowdAfrik</b>, brings
                you exciting opportunities to test your luck and win big prizes.{" "}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                <a className="text-white mt-4 font-light  text-center px-8 py-4 border max-w-72 rounded-3xl border-white  hover:bg-red-800 hover:text-white mr-8 " href="/form"> Become an agent</a><br/>
                </div>
                <div className="mt-16 lg:mt-0">
                <a className="text-white mt-4 font-light  text-center px-8 py-4 border max-w-72 rounded-3xl border-white  hover:bg-red-800 hover:text-white " href="">Download ALS App</a>
                </div>
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
<div className="lg:mt-52 mt-32">
<h2 className="font-light text-gray-100 text-2xl text-center lg:text-4xl  mb-2 animate-flip-up">Our Games</h2>

          <div className="grid gap-4  lg:grid-cols-2 mt-24 text-grey-900  ">
            <div className="block mx-auto">
              
                <Image
                  className="w-auto"
                  src={Alsapp}
                  alt="image"
                />

           
            </div>
            <div>
              <a className="block mx-auto" href="#">
                <Image
                  className="w-auto"
                  src={Scratch}
                  alt="image"
                />

              </a>
            </div>
          </div>
          </div>


          <div className="grid grid-cols-1 lg:mt-52 mt-32  text-grey-900" >

            <h3 className="text-gray-100 text-3xl font-light text-center ">Afro Lottery Systems </h3>
            <p className="text-gray-100 text-left lg:text-center mt-8 text-l font-thin">Discover Afro Lottery Systems -ALS, your gateway to thrilling lottery experiences in Africa. ALS, powered by CrowdAfrik, brings you exciting opportunities to test your luck and win big prizes. Our user-friendly app lets you participate in weekly draws, where you can select 6 numbers and stand a chance to win enticing rewards. Explore ALS now and join thousands of players in the ultimate quest for fortune and excitement</p>
            <a href="https://www.crowdafrik.com" className="text-white mt-8 font-light text-center px-4 py-4 border max-w-72 rounded-3xl border-white mx-auto hover:bg-red-700 hover:text-white">
              Visit our Parent Organisation
            </a>
          </div>

          <div className="grid grid-cols-1  lg:mt-52 mt-32 text-grey-900" >

            <h3 className="text-gray-100 text-3xl font-light text-center ">How to Play ALS App</h3>
            <p className="text-gray-100 text-left lg:text-center  mt-8 text-l font-thin">ALS offers a user-friendly mobile app and kiosk devices, allowing players to select 6 numbers between 1 and 60 for each draw. Using a secure algorithm, ALS ensures fair, random winning combinations. Prizes are awarded for matching 3, 4, 5, or 6 numbers, with automatic payouts directly to user accounts.  ALS features two games: the Continental Game, available across Africa with prizes paid in US Dollars, and the National Game, offering payouts in local currencies of participating African countries.
            </p>
            <div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
              <div>
              <div className="block mx-auto">
              <a className="block mx-auto" href="#">
                <Image
                  className="w-auto"
                  src={Alsapp}
                  alt="image"
                />

              </a>
            </div>
              </div>
              <div>
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc p-4 ">

                  <li className="mt-4">
                    Create an Account: Sign up with your details to get started.
                  </li>
                  <li className="mt-4">
                  Click play game,  then confirm the type of game to play (Continental) play across African participating countries or (National) - specific to country of participation only.
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
              <a className="block mx-auto" href="#">
                <Image
                  className="w-auto"
                  src={kiosk}
                  alt="image"
                />
              </a>
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


          <div className="grid grid-cols-1 lg:mt-52 mt-32  text-grey-900" >

<h3 className="text-gray-100 text-3xl font-light text-center ">How to play with Scratch Card</h3>
<p className="text-gray-100 text-left lg:text-center mt-8 text-l font-thin"> Afro Gold Rush is an enticing instant win scratch card game from Afro Lottery Systems, a subsidiary of CrowdAfrik. This game combines the thrill of instant gratification with the allure of African cultural and trophy symbols. The design focuses on making the game attractive to a wide audience by offering frequent wins that keep players engaged while ensuring fairness and excitement. The odds of winning are also high.</p>
</div>
<div className="grid lg:grid-cols-2 gap-4 lg:mt-32 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
            <div>
              <a className="block mx-auto" href="#">
                <Image
                  className="w-auto"
                  src={Scratch}
                  alt="image"
                />
              </a>
            </div>
              <div>
                <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc p-4">
                  <li>Step 1: Scratch off the silver coating on the front of the card.</li>
                  <li className="mt-4">Step 2: If you win, the winning amount will be clearly displayed, surrounded by a trophy symbol.</li>
                  <li className="mt-4">
                  Step 4: If your card reveals &quot;SORRY, TRY AGAIN. YOU MAY BE LUCKY NEXT TIME,&quot; you do not win this time.
                  </li>
                  <li className="mt-4">
                  Step 4: Present your winning scratch card to an authorized Afro Lottery Systems super agent, kiosk or contact us to redeem your prize.                  </li>
                  <li className="mt-4">
                  Upon claiming a prize, your scratch card will be scanned and checked against our system to verify authenticity and issuance details. Stolen or voided cards will not be accepted.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:mt-52 mt-32  text-grey-900" >

<h3 className="text-gray-100 text-l font-light text-left ">Warning: Gambling can be addictive. Play responsibly</h3>
<p className="text-gray-100 text-left lg:text-left mt-8 text-sm font-thin"> Afro Gold Rush&quot; is an enticing instant win scratch card game from Afro Lottery Systems, a subsidiary of CrowdAfrik. This game combines the thrill of instant gratification with the allure of African cultural and trophy symbols. The design focuses on making the game attractive to a wide audience by offering frequent wins that keep players engaged while ensuring fairness and excitement. The odds of winning are also high.</p>
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
                <a href="mailto:als@crowdafrik.com" className="text-white mt-8 font-light text-center px-4 py-4 border max-w-72 rounded-3xl border-white mx-auto hover:bg-red-900 hover:text-white">
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
