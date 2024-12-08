import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import Swal from 'sweetalert2'

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
                    timer: 1000,
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
        <div className="container mx-auto px-5 xl:px-20 mt-5 mb-10">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-5">
                <p className="md:text-3xl text-2xl font-bold text-purple-700">All Campaign List</p>
                <button onClick={handleSort} className="bg-purple-700 text-sm text-white rounded shadow-md hover:bg-purple-800 transition-all w-[180px] font-medium sm:w-48 sm:h-10 h-8">Sort By Donation Amount
                </button>
            </div>
            <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-lg">
                <table className="table w-full xl:table-lg border-collapse">
                    <thead className="bg-gradient-to-r from-purple-600 text-[15px] to-purple-800 text-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left border border-gray-300">ID</th>
                            <th className="py-3 px-4 text-left border border-gray-300">Username</th>
                            <th className="py-3 px-4 text-left hidden md:table-cell border border-gray-300">
                                User Email
                            </th>
                            <th className="py-3 px-4 text-left border border-gray-300">Campaign Type</th>
                            <th className="py-3 px-4 text-left border border-gray-300">Donation Amount</th>
                            <th className="py-3 px-4 text-left border border-gray-300">Date</th>
                            <th className="py-3 px-4 text-left border border-gray-300">View</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedData.map((campaign, idx) => (
                            <tr
                                key={campaign._id}
                                className={`hover:bg-purple-50 transition-all ${idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }`}
                            >
                                <td className="py-3 px-4 border border-gray-300">{idx + 1}</td>
                                <td className="py-3 px-4 border border-gray-300">{campaign.name}</td>
                                <td className="py-3 px-4 hidden md:table-cell border border-gray-300">
                                    {campaign.email}
                                </td>
                                <td className="py-3 px-4 border border-gray-300">{campaign.campaign_type}</td>
                                <td className="py-3 px-4 border border-gray-300 font-medium text-purple-700">
                                    ${campaign.number.toLocaleString()}
                                </td>
                                <td className="py-3 px-4 border border-gray-300">{campaign.date}</td>
                                <td className="py-3 px-4 border border-gray-300">
                                    <Link to={`/all-campaign/${campaign._id}`} className="lg:hidden">
                                        <MdOutlineRemoveRedEye className="text-2xl text-purple-600 hover:text-purple-800" />
                                    </Link>
                                    <Link
                                        to={`/all-campaign/${campaign._id}`}
                                        className="bg-purple-300 transition-all rounded-full hover:bg-purple-200 border px-3 py-1 font-medium text-sm text-purple-700 hover:border-purple-700 hidden lg:inline-block"
                                    >
                                        View More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllCampaign;