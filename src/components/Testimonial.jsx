import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

// Slider Images
import slide1 from '../assets/testimonial.jpg';
// import slide2 from '../assets/testimonial.jpg';
// import slide3 from '../assets/testimonial.jpg';


const Testimonial = () => {
    return (
        <div
            className="bg-fixed bg-center bg-cover"
            style={{
                backgroundImage: `url(${slide1})`,
                backgroundColor: 'rgba(0,0,0,0.83)',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="container mx-auto px-5">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="sm:h-[450px] swiper_slider"
                >
                    <SwiperSlide>
                        <div className="h-full flex justify-center items-center flex-col gap-5 text-center px-10 sm:px-20 space-y-3">
                            <div className="flex gap-2 items-center">
                                <FaStar className="text-4xl text-yellow-600" />
                                <FaStar className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                            </div>
                            <FaQuoteLeft className="text-7xl text-gray-300" />
                            <p className="text-gray-300 sm:pb-2 md:w-4/5 mx-auto">
                                There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others
                            </p>
                            <h3 className="font-semibold text-gray-400 text-3xl">MS Hasib</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex justify-center items-center flex-col gap-5 text-center px-10 sm:px-20 space-y-3">
                            <div className="flex gap-2 items-center">
                                <FaStar className="text-4xl text-yellow-600" />
                                <FaStar className="text-4xl text-yellow-600" />
                                <FaStar className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                            </div>
                            <FaQuoteLeft className="text-7xl text-gray-300" />
                            <p className="text-gray-300 sm:pb-2 md:w-4/5 mx-auto">
                                From the intuitive interface to the amazing team behind it, this initiative exceeded my expectations. It’s incredible how one platform can bring so many people together for a greater good. From the intuitive interface to the amazing team behind it, this initiative exceeded.
                            </p>
                            <h3 className="font-semibold text-gray-400 text-3xl">David Hanter</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex justify-center items-center flex-col gap-5 text-center px-10 sm:px-20 space-y-3">
                            <div className="flex gap-2 items-center">
                                <FaStar className="text-4xl text-yellow-600" />
                                <FaStar className="text-4xl text-yellow-600" />
                                <FaStar className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                                <IoIosStarHalf className="text-4xl text-yellow-600" />
                            </div>
                            <FaQuoteLeft className="text-7xl text-gray-300" />
                            <p className="text-gray-300 sm:pb-2 md:w-4/5 mx-auto">
                                This platform has completely changed the way I approach giving back to the community. The seamless process and thoughtful initiatives made it easy for me to contribute to causes I care about. This platform has completely changed the way I approach giving back to the community
                            </p>
                            <h3 className="font-semibold text-gray-400 text-3xl">Maichel Warner</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial;