import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleCampaign = ({ campaign }) => {
    const { _id, title, image, desc, campaign_type, number } = campaign;
    return (
        <div className="border rounded duration-700 hover:-translate-y-3 hover:border-gray-300 bg-[rgba(0,0,0,0.1)] shadow-lg">
            <img src={image} className="w-full rounded-t h-56" />
            <div className="p-5">
                <p className="text-xl text-gray-900 font-medium mb-2">{title}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{desc.substring(0, 80)}...</p>
                <div className="flex justify-between mb-4">
                    <p className="font-medium dark:text-gray-400 text-gray-600 cursor-pointer">{campaign_type}</p>
                    <p className="px-4 dark:text-gray-700 font-medium cursor-pointer py-2 text-gray-800 rounded-full text-sm bg-slate-300">${number}</p>
                </div>
                <Link to={`/all-campaign/${_id}`} className="bg-purple-600 items-center transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">
                    <span className="pe-1">View More</span>
                    <FaArrowRightLong className="inline" />
                </Link>
            </div>
        </div>
    )
}

export default SingleCampaign;