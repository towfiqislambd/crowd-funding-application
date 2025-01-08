import testimonial from "../assets/testimonial.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
    return (
        <div className="carousel w-full h-[450px] mb-16">
            <div id="testimonial1" className="carousel-item relative w-full">
                <img src={testimonial} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-4xl text-yellow-600" />
                        <FaStar className="text-4xl text-yellow-600" />
                        <FaStar className="text-4xl text-yellow-600" />
                        <IoIosStarHalf className="text-4xl text-yellow-600" />
                        <IoIosStarHalf className="text-4xl text-yellow-600" />
                    </div>
                    <FaQuoteLeft className="text-7xl text-gray-300" />
                    <p className="text-gray-300 pb-2 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things
                    </p>
                    <h3 className="font-semibold text-gray-400 text-3xl">Willyeam Alexjander</h3>

                </div>
                <div className="absolute hidden lg:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a><RiArrowLeftSLine className="text-6xl text-purple-600" /></a>
                    <a><RiArrowRightSLine className="text-6xl text-purple-600" /></a>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;