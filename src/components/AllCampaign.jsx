import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'
import SingleCampaign from "./SingleCampaign";

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const [sortedData, setSortedData] = useState(campaigns)
    const handleSort = () => {
        fetch('https://crowd-funding-rouge.vercel.app/all-campaign/sortedData')
            .then(res => res.json())
            .then(data => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sorted by Amount Successfully"
                });
                setSortedData(data)
            })
    }

    return (
        <div className="container mx-auto px-5 mb-16 mt-28">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-7">
                <p className="md:text-3xl text-2xl font-bold text-purple-700">All Campaign List</p>
                <button onClick={handleSort} className="bg-purple-700 text-sm text-white rounded shadow-md hover:bg-purple-800 transition-all w-[200px] font-medium sm:w-52 sm:h-10 h-8">Sort By Max Donation Amount
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7">
                {
                    sortedData.map((campaign, idx) => <SingleCampaign key={idx} campaign={campaign}></SingleCampaign>)
                }
            </div>
        </div>
    )
}

export default AllCampaign;