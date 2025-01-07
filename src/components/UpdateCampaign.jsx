import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCampaign = () => {
    const navigate = useNavigate()
    const campaign = useLoaderData();
    const [dates, setDates] = useState(campaign.date)
    const [option, setOption] = useState(campaign.campaign_type)
    const { _id, image, title, name, email, number, desc, campaign_type, date } = campaign

    const handleUpdateCampaign = e => {
        e.preventDefault()
        const image = e.target.image.value;
        const title = e.target.title.value;
        const number = e.target.number.value;
        const desc = e.target.desc.value;
        const campaign_type = option;
        const date = dates;
        const newCampaign = { image, title, campaign_type, date, number, desc }
        fetch(`https://crowd-funding-rouge.vercel.app/update-campaign/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate('/my-campaign')
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Updated Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div className="container mx-auto px-5 sm:px-10 mt-28 mb-10">
            <div className="bg-[rgba(0,0,0,0.15)] mx-auto shadow-xl border rounded-lg my-8 max-w-3xl">
                <form onSubmit={handleUpdateCampaign} className="p-4 sm:p-8 space-y-3 sm:space-y-5 bg-gray-200 border">
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 text-center">Update Campaign</h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <input defaultValue={image} type="text" name="image" placeholder="Image URL" className="input text-gray-600 w-full input-bordered col-span-2 sm:col-span-1 border-purple-200 rounded" required />
                        <input defaultValue={title} type="text" name="title" placeholder="Campaign Title" className="input text-gray-600 w-full input-bordered col-span-2 sm:col-span-1 border-purple-200 rounded" required />
                        <select defaultValue={campaign_type} onChange={(e) => setOption(e.target.value)} className="select col-span-2 sm:col-span-1 select-primary rounded border-purple-200 w-full text-gray-600">
                            <option value='defOption' disabled>Campaign Type</option>
                            <option value='personal-issue'>Personal Issue</option>
                            <option value='startup'>Startup</option>
                            <option value='business'>Business</option>
                            <option value='creative-ideas'>Creative Ideas</option>
                        </select>
                        <input defaultValue={date} onChange={(e) => setDates(e.target.value)} type="date" className="input col-span-2 sm:col-span-1 w-full input-bordered border-purple-200 rounded text-gray-600" required />
                        <input disabled value={name} type="text" name="name" placeholder="User Name" className="input w-full col-span-2 sm:col-span-1 input-bordered border-purple-200 rounded" required />
                        <input disabled value={email} type="email" name="email" placeholder="User Email" className="input w-full col-span-2 sm:col-span-1 input-bordered border-purple-200 rounded" required />
                        <input defaultValue={number} type="number" name="number" placeholder="Donation amount" className="input w-full input-bordered text-gray-600 border-purple-200 rounded col-span-2" required />
                        <textarea defaultValue={desc} name="desc" rows={5} className="w-full text-gray-600 px-3 py-2 col-span-2 border rounded border-purple-200" placeholder="Description"></textarea>
                        <input type="submit" value='Update' className="btn col-span-2 bg-purple-600 hover:bg-purple-600 w-full text-white" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCampaign;