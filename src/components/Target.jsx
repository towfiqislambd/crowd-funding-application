import { IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdWifiProtectedSetup } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Target = () => {
    return (
        <div className="container mx-auto px-5 pb-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl dark:text-white font-bold text-gray-800 mb-4">Our Future Goals</h2>
                <p className="lg:w-1/2 dark:text-gray-300 md:w-2/3 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="p-5 rounded-lg space-y-4 text-center bg-[rgba(0,0,0,0.1)]
                border-[2px] border-purple-500 transition-all shadow-lg">
                    <IoIosPeople className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl text-gray-800 dark:text-gray-200 font-bold mb-1">Growing Community</h4>
                    <p className="text-gray-600 dark:text-gray-400">After organizing our closet, in the end we are probably wondering what we are going to do wite</p>
                    <button className="underline dark:text-gray-500 font-medium text-gray-700">Read More</button>
                </div>
                <div className="p-5 rounded-lg space-y-4 text-center bg-[rgba(0,0,0,0.1)]
                border-[2px] border-purple-500 transition-all shadow-lg">
                    <MdWifiProtectedSetup className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl text-gray-800 dark:text-gray-200 font-bold mb-1">Setup Team</h4>
                    <p className="text-gray-600 dark:text-gray-400">As it the beginning step of our organization, We are offering lots of opportunity now.</p>
                    <button className="underline dark:text-gray-500 font-medium text-gray-700">Read More</button>
                </div>
                <div className="p-5 rounded-lg space-y-4 text-center bg-[rgba(0,0,0,0.1)]
                border-[2px] border-purple-500 transition-all shadow-lg">
                    <BiSolidDonateHeart className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl text-gray-800 dark:text-gray-200 font-bold mb-1">1000+ Institutions</h4>
                    <p className="text-gray-600 dark:text-gray-400">After cleaning and organizing, in the end we are probably wondering what we are going to do with</p>
                    <button className="underline dark:text-gray-500 font-medium text-gray-700">Read More</button>
                </div>
                <div className="p-5 rounded-lg space-y-4 text-center bg-[rgba(0,0,0,0.1)]
                border-[2px] border-purple-500 transition-all shadow-lg">
                    <BiSolidInstitution className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl text-gray-800 dark:text-gray-200 font-bold mb-1">Permanent Campus</h4>
                    <p className="text-gray-600 dark:text-gray-400">As it the beginning step of our organization, We are offering lots of opportunity now.</p>
                    <button className="underline dark:text-gray-500 font-medium text-gray-700">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Target;