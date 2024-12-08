import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
    const { _id, title, image, description, status, category } = campaign;
    return (
        <div className="border p-6 rounded-lg border-gray-200 shadow">
            <img src={image} className="w-full h-52 rounded-lg mb-3" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{description}</p>
            <div className="flex  justify-between mb-4">
                <p className="font-medium dark:text-gray-400 text-gray-600 cursor-pointer">{category}</p>
                <p className="px-4 dark:text-gray-700 font-medium cursor-pointer py-2 rounded-full text-sm bg-purple-200">{status}</p>
            </div>
            <Link to={`/campaign/${_id}`} className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">See More</Link>
        </div>
    )
}

export default Campaign;