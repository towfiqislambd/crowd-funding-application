import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch(`https://crowd-funding-rouge.vercel.app/my-campaign/${user.email}`)
            .then(res => res.json())
            .then(data => setCampaigns(data));
    }, [user.email]);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crowd-funding-rouge.vercel.app/all-campaign/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingCampaign = campaigns.filter(campaign => campaign._id !== _id);
                            setCampaigns(remainingCampaign);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        })
    }

    return (
        <div className="container mx-auto px-5 xl:px-28 mt-28 mb-10">
            {campaigns.length === 0 ? (
                <h2 className="text-center text-3xl text-red-500 font-semibold">You did not add any campaign!!</h2>
            ) : (
                <div className="overflow-x-auto border-2 rounded-lg shadow-lg border-gray-400">
                    <table className="table-auto w-full border-collapse border-spacing-0">
                        <thead className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm sm:text-base border border-gray-600">ID</th>
                                <th className="py-3 px-4 text-left text-sm sm:text-base border border-gray-600">Username</th>
                                <th className="py-3 px-4 text-left text-sm sm:text-base hidden sm:table-cell border border-gray-600">User Email</th>
                                <th className="py-3 px-4 text-left text-sm sm:text-base border border-gray-600">Campaign Type</th>
                                <th className="py-3 px-4 text-left text-sm sm:text-base border border-gray-600">Amount</th>
                                <th className="py-3 px-4 text-left text-sm sm:text-base border border-gray-600">Date</th>
                                <th className="py-3 px-4 text-left text-sm sm:text-base border border-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, idx) => (
                                <tr
                                    key={campaign._id}
                                    className={`hover:bg-gray-100 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="py-3 px-4 text-sm sm:text-base border border-gray-300">
                                        {idx + 1}
                                    </td>
                                    <td className="py-3 px-4 text-sm sm:text-base border border-gray-300">
                                        {campaign.name}
                                    </td>
                                    <td className="py-3 px-4 text-sm sm:text-base hidden sm:table-cell border border-gray-300">
                                        {campaign.email}
                                    </td>
                                    <td className="py-3 px-4 text-sm sm:text-base border border-gray-300">
                                        {campaign.campaign_type}
                                    </td>
                                    <td className="py-3 px-4 text-sm sm:text-base border border-gray-300">
                                        {campaign.number}
                                    </td>
                                    <td className="py-3 px-4 text-sm sm:text-base border border-gray-300">
                                        {campaign.date}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-300">
                                        <div className="flex sm:flex-row sm:justify-center sm:items-center gap-2">
                                            <Link
                                                to={`/update-campaign/${campaign._id}`}
                                                className="flex items-center justify-center text-blue-500 hover:text-blue-700 transition duration-200"
                                            >
                                                <MdEdit className="text-2xl" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(campaign._id)}
                                                className="flex items-center justify-center text-red-500 hover:text-red-700 transition duration-200"
                                            >
                                                <RxCross2 className="text-2xl" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default MyCampaign;
