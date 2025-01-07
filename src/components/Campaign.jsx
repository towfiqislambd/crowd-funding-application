import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
    const { _id, title, image, description, status, category } = campaign;
    return (
        <div className="border rounded border-gray-200 shadow">
            <img src={image} className="w-full rounded-t h-56" />
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{description}</p>
                <div className="flex justify-between mb-4">
                    <p className="font-medium dark:text-gray-400 text-gray-600 cursor-pointer">{category}</p>
                    <p className="px-4 dark:text-gray-700 font-medium cursor-pointer py-2 rounded-full text-sm bg-purple-200">{status}</p>
                </div>
                <Link to={`/campaign/${_id}`} className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium">See More</Link>
            </div>
        </div>
    )
}

export default Campaign;