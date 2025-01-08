import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from "./AuthProvider";
import { useNavigate } from 'react-router-dom';

const AddNewCampaign = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [dates, setDates] = useState(null)
    const [option, setOption] = useState(null)

    const handleNewCampaign = e => {
        e.preventDefault()
        const image = e.target.image.value;
        const title = e.target.title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const desc = e.target.desc.value;
        const campaign_type = option;
        const date = dates
        const newCampaign = { image, title, campaign_type, date, name, email, number, desc }

        fetch('https://crowd-funding-rouge.vercel.app/all-campaign', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Added Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate('/all-campaign')
                }
            })
    }

    return (
        <div className="container mx-auto px-5 sm:px-10 mt-28 mb-10">
            <div className="bg-[rgba(0,0,0,0.15)] mx-auto shadow-xl border rounded-lg my-8 max-w-3xl">
                <form onSubmit={handleNewCampaign} className="p-4 sm:p-8 space-y-3 sm:space-y-5 border">
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 text-center">Add New Campaign</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                            type="url"
                            name="image"
                            placeholder="Image URL"
                            className="input bg-white w-full input-bordered border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 transition"
                            required
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Campaign Title"
                            className="input bg-white w-full input-bordered border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 transition"
                            required
                        />
                        <select defaultValue='defOption' onChange={(e) => setOption(e.target.value)} className="select bg-white w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 text-gray-400 transition"
                            required >
                            <option value='defOption' disabled>Campaign Type</option>
                            <option value='Personal Issue'>Personal Issue</option>
                            <option value='Startup'>Startup</option>
                            <option value='Business'>Business</option>
                            <option value='Creative Ideas'>Creative Ideas</option>
                        </select>
                        <input
                            type="text"
                            onChange={(e) => setDates(e.target.value)}
                            onFocus={e => e.target.type = 'date'}
                            onBlur={e => e.target.type = 'text'}
                            placeholder='Deadline (mm/dd/yyyy)'
                            className="input bg-white w-full input-bordered border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 text-gray-600 transition"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                            disabled
                            value={user?.displayName}
                            type="text"
                            name="name"
                            placeholder="User Name"
                            className="input w-full input-bordered border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600"
                            required
                        />
                        <input disabled value={user?.email} type="email" name="email" placeholder="User Email"
                            className="input w-full input-bordered border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600" required />
                    </div>
                    <input
                        type="number"
                        name="number"
                        placeholder="Minimum Donation Amount"
                        className="input w-full input-bordered border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 transition"
                        required
                    />
                    <textarea name="desc" rows={5} className="textarea w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 transition"
                        placeholder="Description" required></textarea>
                    <button type="submit" className="btn w-full border-none bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 shadow-md transition">Add Campaign</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewCampaign;
