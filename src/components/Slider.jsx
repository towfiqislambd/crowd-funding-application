import { Link } from "react-router-dom";
import banner1 from "../assets/h1.jpg";
import banner2 from "../assets/h2.jpg";
import banner3 from "../assets/h3.jpg";
import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {
    return (
        <div className="carousel w-full md:h-[85vh] relative overflow-hidden">
            <div id="slide1" className="carousel-item py-40 md:py-0 h-full relative w-full">
                <img src={banner1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <h1 className="text-3xl md:w-2/3 mx-auto  md:text-4xl tracking-wide lg:text-5xl lg:leading-[3.5rem] font-semibold ">
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
                    <p className="text-gray-200 pb-4 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <Link to='/all-campaign' className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                        See All Campaign
                    </Link>
                </div>
                <div className="absolute hidden md:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn">❮</a>
                    <a href="#slide2" className="btn">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item py-40 md:py-0 h-full relative w-full">
                <img src={banner2} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <h1 className="text-3xl md:text-4xl tracking-wide lg:text-5xl lg:leading-[3.5rem] font-semibold"> A donation is a gift for charity, <br /> humanity and trustworthy
                    </h1>
                    <p className="text-gray-200 pb-4 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <Link to='/all-campaign' className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                        See All Campaign
                    </Link>
                </div>
                <div className="absolute hidden md:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn">❮</a>
                    <a href="#slide3" className="btn">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item py-40 md:py-0 h-full relative w-full">
                <img src={banner3} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-5">
                    <h1 className="text-3xl tracking-wide md:text-4xl lg:text-5xl lg:leading-[3.5rem] font-semibold">Empowering dreams, your platform <br /> for crowdfunding success</h1>
                    <p className="text-gray-200 pb-4 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <Link to='/all-campaign' className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                        See All Campaign
                    </Link>
                </div>
                <div className="absolute hidden md:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn">❮</a>
                    <a href="#slide1" className="btn">❯</a>
                </div>
            </div>

        </div>
    )
}

export default Slider;
