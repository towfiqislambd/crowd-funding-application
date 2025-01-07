import Campaign from "./Campaign";

const RunningCampaign = ({ campaigns }) => {
    return (
        <div className="container mx-auto px-5 my-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-4">Our Running Campaign</h2>
                <p className="lg:w-1/2 dark:text-gray-300 md:w-2/3 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7">
                {
                    campaigns.map((campaign, idx) => <Campaign key={idx} campaign={campaign}></Campaign>)
                }
            </div>
        </div>
    )
}

export default RunningCampaign;