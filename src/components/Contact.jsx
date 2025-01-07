import { MdEmail } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-16 pt-28 container mx-auto px-5">
            <div className="">
                <p className="text-3xl mb-3 font-semibold">Feel Free To Contact</p>
                <p className="text-gray-500 mb-5">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.Besides, If you want to be member of crowd-funding family, You can send an email which mentioned below. Thank You for you time and patience.</p>
                <div className="space-y-5">
                    <p className="flex gap-3 items-center"><span className="w-10 h-10 bg-gray-800 text-white grid place-items-center rounded"><FaPhoneVolume className="text-xl" /></span><span>Dhaka-1236, Bangladesh</span></p>
                    <p className="flex gap-3 items-center"><span className="w-10 h-10 bg-gray-800 text-white grid place-items-center rounded"><FaLocationDot className="text-xl" /></span><span>+880131065516</span></p>
                    <p className="flex gap-3 items-center"><span className="w-10 h-10 bg-gray-800 text-white grid place-items-center rounded"><MdEmail className="text-xl" /></span><span>hr@crowdfunding.com</span></p>
                    <p className="flex gap-3 items-center"><span className="w-10 h-10 bg-gray-800 text-white grid place-items-center rounded"><TbWorldCheck className="text-xl" /></span><span>https://crowd-funding.com.bd</span></p>
                </div>
            </div>
            <div className="">
                <form action='#' className="border space-y-4 p-5 lg:px-9 lg:py-7 rounded bg-[rgba(0,0,0,0.1)]">
                    <h3 className="text-center text-3xl text-gray-700 font-bold mb-2">Get In Touch</h3>
                    <input name="name" type="text" className="input rounded input-bordered w-full" placeholder="Full Name*" required />
                    <input name="email" type="email" className="input rounded input-bordered w-full" placeholder="Email*" required />
                    <input name="phone" type="number" className="input rounded input-bordered w-full" placeholder="Phone*" required />
                    <textarea name="message" className="textarea rounded textarea-bordered w-full" placeholder="Message*" rows={4} required></textarea>
                    <input type="submit" value='Send' className="bg-purple-600 cursor-pointer text-white font-medium rounded tracking-wider px-5 py-2 uppercase" />
                </form>
            </div>
        </section>
    )
}

export default Contact;