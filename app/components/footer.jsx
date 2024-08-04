
import image3 from '../images/logo.svg'
import Image from "next/image";

function Footer() {
    return (
        <footer className="bg-transaprent border rounded-3xl border-gray-700 backdrop-blur-sm m-4 mt-32">
            <div className="w-full  mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='https://www.afrolottery.com/'>
                        <Image
                            className="w-28"
                            src={image3}
                            alt="image"
                        />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="about" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="mailto:als@crowdafrik.com" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <p className='text-sm text-gray-500 sm:text-centertext-gray-400 text-center'>102F Regus Dartford Admirals Park, Victory Way, Crossways,Dartford DA2 6QD, United Kingdom
                </p>
                <p className='text-sm text-gray-500 sm:text-centertext-gray-400 text-center'>+44 203 7977862 || info@crowdafrik.com
                </p>
                <hr className="my-6  sm:mx-autoborder-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-centertext-gray-400">© 2024 <a className="hover:underline">Afro Lottery System</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}
export default Footer;