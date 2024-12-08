import { IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdWifiProtectedSetup } from "react-icons/md";

const Target = () => {
    return (
        <div className="container mx-auto px-5 pb-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl dark:text-white font-semibold font-mono text-gray-800 mb-4">Our Future Goals</h2>
                <p className="lg:w-1/2 dark:text-gray-300 md:w-2/3 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10">
                <div className="p-5 py-10 rounded-lg space-y-4 text-center bg-purple-100
                border-[2px] border-purple-600 transition-all">
                    <IoIosPeople className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl dark:text-gray-800 font-bold mb-2">Growing Community</h4>
                    <p className="text-gray-500 pb-2">After cleaning and organizing our closet, in the end we are probably wondering what we are going to do with clothes that we no longer are going to wear; perhaps they are too worn out or they don’t fit as well anymore</p>
                    <button className="underline font-medium text-gray-700">Read More</button>
                </div>
                <div className="p-5 py-10 rounded-lg space-y-4 text-center bg-purple-100
                border-[2px] border-purple-600 transition-all">
                    <MdWifiProtectedSetup className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl dark:text-gray-800 font-bold mb-2">Setup Team</h4>
                    <p className="text-gray-500 pb-2">After cleaning and organizing our closet, in the end we are probably wondering what we are going to do with clothes that we no longer are going to wear; perhaps they are too worn out or they don’t fit as well anymore</p>
                    <button className="underline font-medium text-gray-700">Read More</button>
                </div>
                <div className="p-5 py-10 rounded-lg space-y-4 text-center bg-purple-100
                border-[2px] border-purple-600 transition-all">
                    <BiSolidDonateHeart className="text-7xl mx-auto rounded-full p-3 text-white bg-purple-400 " />
                    <h4 className="text-2xl dark:text-gray-800 font-bold mb-2">1000+ Institutions</h4>
                    <p className="text-gray-500 pb-2">After cleaning and organizing our closet, in the end we are probably wondering what we are going to do with clothes that we no longer are going to wear; perhaps they are too worn out or they don’t fit as well anymore</p>
                    <button className="underline font-medium text-gray-700">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Target;