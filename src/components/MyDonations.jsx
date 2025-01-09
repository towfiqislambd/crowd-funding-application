import Donation from "./Donation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donatedUsers, setDonatedUsers] = useState([]);
    useEffect(() => {
        fetch(`https://crowd-funding-rouge.vercel.app/donated-campaign/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setDonatedUsers(data)
            })
    }, [user.email])

    return (
        <div className="container mx-auto px-5 mt-28 mb-10">
            {
                donatedUsers.length === 0 ?
                    <h2 className="text-center h-[65vh] text-3xl text-error font-semibold">You did not donate yet!!</h2> :
                    donatedUsers.map(donatedUser => <Donation key={donatedUser._id} donatedUser={donatedUser}></Donation>)
            }
        </div>
    )
}

export default MyDonations;