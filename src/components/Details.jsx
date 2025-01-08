import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FaLocationArrow } from "react-icons/fa6";
import Swal from 'sweetalert2'

const Details = () => {
    const navigate = useNavigate();
    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    const displayName = user?.displayName;
    const email = user?.email;
    const { title, image, description, status, category } = details;

    const handleDonate = () => {
        if (!user) {
            return Swal.fire({
                text: "To continue Donation, Please Log in first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

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
                details && <div className="container mx-auto px-5 lg:px-32 xl:px-40">
                    <div className="border bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-5">
                        <img src={details.image} className="w-full h-full sm:h-96 rounded" />
                        <div className="">
                            <p className="text-2xl text-gray-800 font-medium mb-3">{details.title}</p>
                            <p className="text-gray-600 mb-2">{details.description}</p>
                            <p className="text-gray-700 font-medium mb-1">Category: <span className="font-normal">{details.category}</span></p>
                            <p className="font-medium text-gray-700 mb-1">Status: <span className="font-normal">{details.status}</span></p>
                            <p className="text-gray-700 font-medium text-base mb-1">Donation Amount: <span className="font-normal">10000</span></p>
                            <p className="text-gray-700 font-medium text-base mb-5">Deadline: <span className="font-normal">{details.date} 10/5/2025</span></p>
                            <Link onClick={handleDonate} className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-2 rounded font-medium text-sm">
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
