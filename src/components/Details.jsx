import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FaLocationArrow } from "react-icons/fa6";
import Swal from 'sweetalert2'

const Details = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext)
    const displayName = user?.displayName;
    const email = user?.email
    const { title, image, description, status, category } = details;

    const handleDonate = () => {
        const donatedUser = { title, image, description, status, category, displayName, email }
        fetch('https://crowd-funding-rouge.vercel.app/donated-campaign', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(donatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Donation Completed",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div className="bg-slate-100 pt-28 pb-10">
            {
                details && <div className="container mx-auto lg:px-40">
                    <div className="border bg-white rounded-lg shadow-lg grid grid-cols-2 gap-8 items-center p-5">
                        <img src={details.image} className="w-full h-96 rounded" />
                        <div className="">
                            <p className="md:text-2xl text-gray-800 font-medium mb-1 sm:mb-3">{details.title}</p>
                            <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">{details.description}MongoDB is a NoSQL database that provides flexibility and scalability for modern applications
                                MongoDB is a NoSQL database that provides flexibility and scalability for modern applications
                                MongoDB is a NoSQL database that provides flexibility and scalability for modern applications</p>
                            <p className="text-gray-700 font-medium mb-1">Category: <span className="font-normal">{details.category}</span></p>
                            <p className="font-medium text-gray-700 mb-1">Status: <span className="font-normal">{details.status}</span></p>
                            <p className="text-gray-700 font-medium text-sm sm:text-base mb-1">Donation Amount: <span className="font-normal">1000</span></p>
                            <p className="text-gray-700 font-medium text-sm sm:text-base mb-2 sm:mb-5">Deadline: <span className="font-normal">{details.date} 10/11/2034</span></p>
                            <Link onClick={handleDonate} className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-3 py-1 md:px-5 md:py-2 rounded font-medium text-xs md:text-sm">
                                <span className="pe-1">Donate Now </span>
                                <FaLocationArrow className="inline text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Details;
