import { Link } from "react-router-dom";
import banner1 from "../assets/h1.jpg";
import banner2 from "../assets/h2.jpg";
import banner3 from "../assets/h3.jpg";
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
    const [slide, setSlide] = useState('slide1')
    return (
        <div className="carousel w-full h-[570px] lg:h-[90vh] overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <h1 className="text-3xl mt-16 lg:mt-10 md:text-4xl tracking-wide lg:text-5xl lg:leading-[3.5rem] font-medium ">
                        Empowering dreams, <br />
                        <span style={{ color: 'rgb(147 51 234)' }}>
                            <Typewriter
                                words={[
                                    ' your platform for crowdfunding',
                                    ' a better world through giving',
                                    ' together we make a difference'
                                ]}
                                loop={3}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="text-gray-200 pb-2 md:pb-4 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <Link to='/all-campaign' className="bg-purple-600 flex items-center gap-2 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                        <span>See All Campaign</span>
                        <FaArrowRightLong />
                    </Link>
                    <div className="flex lg:hidden w-full justify-center items-center gap-2">
                        <a onClick={() => setSlide('slide1')} href="#slide1" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide1' && 'bg-purple-500'}`}></a>
                        <a onClick={() => setSlide('slide2')} href="#slide2" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide2' && 'bg-purple-500'}`}></a>
                        <a onClick={() => setSlide('slide3')} href="#slide3" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide3' && 'bg-purple-500'}`}></a>
                    </div>
                </div>
                <div className="absolute hidden lg:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide3"><RiArrowLeftSLine className="text-6xl text-purple-600" /></a>
                    <a href="#slide2"><RiArrowRightSLine className="text-6xl text-purple-600" /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <h1 className="text-3xl mt-16 lg:mt-10 md:text-4xl tracking-wide lg:text-5xl lg:leading-[3.5rem] font-medium ">
                        A donation is a gift, <br />
                        <span style={{ color: 'rgb(147 51 234)' }}>for charity humanity and trustworthy</span>
                    </h1>
                    <p className="text-gray-200 pb-2 md:pb-4 md:w-4/5 mx-auto">
                        Countless individuals, including the homeless, disaster survivors, underprivileged, and children, lack proper clothing. While we may not be able to change their world entirely, providing just one set of clothes to someone in need can make a significant difference. A single act of kindness, like covering someone bare body, holds immense value.
                    </p>
                    <Link to='/all-campaign' className="bg-purple-600 flex items-center gap-2 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                        <span>See All Campaign</span>
                        <FaArrowRightLong />
                    </Link>
                    <div className="flex lg:hidden w-full justify-center items-center gap-2">
                        <a onClick={() => setSlide('slide1')} href="#slide1" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide1' && 'bg-purple-500'}`}></a>
                        <a onClick={() => setSlide('slide2')} href="#slide2" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide2' && 'bg-purple-500'}`}></a>
                        <a onClick={() => setSlide('slide3')} href="#slide3" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide3' && 'bg-purple-500'}`}></a>
                    </div>
                </div>
                <div className="absolute hidden lg:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide1"><RiArrowLeftSLine className="text-6xl text-purple-600" /></a>
                    <a href="#slide3"><RiArrowRightSLine className="text-6xl text-purple-600" /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <h1 className="text-3xl mt-16 lg:mt-10 md:text-4xl tracking-wide lg:text-5xl lg:leading-[3.5rem] font-medium ">
                        A donation is a gift, <br />
                        <span style={{ color: 'rgb(147 51 234)' }}>for charity humanity and trustworthy</span>
                    </h1>
                    <p className="text-gray-200 pb-2 md:pb-4 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <Link to='/all-campaign' className="bg-purple-600 flex items-center gap-2 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                        <span>See All Campaign</span>
                        <FaArrowRightLong />
                    </Link>
                    <div className="flex lg:hidden w-full justify-center items-center gap-2">
                        <a onClick={() => setSlide('slide1')} href="#slide1" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide1' && 'bg-purple-500'}`}></a>
                        <a onClick={() => setSlide('slide2')} href="#slide2" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide2' && 'bg-purple-500'}`}></a>
                        <a onClick={() => setSlide('slide3')} href="#slide3" className={`w-3 hover:bg-purple-500 duration-200 h-3 bg-gray-200 rounded-full ${slide === 'slide3' && 'bg-purple-500'}`}></a>
                    </div>
                </div>
                <div className="absolute hidden lg:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide2"><RiArrowLeftSLine className="text-6xl text-purple-600" /></a>
                    <a href="#slide1"><RiArrowRightSLine className="text-6xl text-purple-600" /></a>
                </div>
            </div>

        </div>
    )
}

export default Slider;
