import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'

const SingleUser = () => {
    const currentDate = new Date().getDate();
    const singleCampaign = useLoaderData();
    const { user } = useContext(AuthContext)
    const displayName = user?.displayName;
    const email = user?.email
    const { title, image, desc, campaign_type, date } = singleCampaign
    const expireDate = Number(date.split('-')[2]);

    const handleDonate = () => {
        const donatedUser = { title, image, desc, campaign_type, displayName, email }
        if (currentDate > expireDate) {
            return Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Date Expired",
                showConfirmButton: false,
                timer: 2000
            })
        }
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
        <div className="container mx-auto px-5 mt-28">
            {
                singleCampaign && <div className="lg:px-52">
                    <div className="border items-center p-3 md:p-6 rounded-lg border-gray-200 shadow grid grid-cols-12 gap-4 sm:gap-7 my-10">
                        <img src={singleCampaign.image} className="w-full h-28 md:h-48 rounded-lg col-span-4" />
                        <div className="col-span-8">
                            <h3 className="md:text-xl font-semibold mb-1 sm:mb-2">{singleCampaign.title}</h3>
                            <p className="text-gray-500 text-sm sm:text-base mb-2">{singleCampaign.desc}</p>
                            <div className="justify-between hidden md:flex items-center sm:mb-1">
                                <p className="text-gray-500 font-medium text-sm sm:text-base cursor-pointer">Category: <span className="font-normal text-gray-500">{singleCampaign.campaign_type}</span></p>
                                <p className="font-medium text-gray-500">Status: <span className="px-3 text-gray-700 mr-4 font-medium cursor-pointer py-1 rounded-full text-xs sm:text-sm bg-purple-300">N/A</span></p>
                            </div>
                            <p className="text-gray-500 font-medium text-sm sm:text-base mb-2 sm:mb-4">Deadline:
                                <span className="font-normal text-gray-500"> {singleCampaign.date}</span></p>
                            <Link onClick={handleDonate} className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-3 py-1 md:px-5 md:py-[7px] rounded font-medium text-xs md:text-sm">Donate Now</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleUser;