const Donation = ({ donatedUser }) => {
    return (
        <div className="lg:px-40 xl:px-52">
            <div className="border sm:grid grid-cols-12 gap-4 sm:gap-7 my-5 items-center p-5 rounded-lg border-gray-200 shadow">
                <img src={donatedUser.image} className="w-full sm:h-40 rounded-lg col-span-4" />
                <div className="col-span-8 ">
                    <p className="bg-purple-300 hidden md:inline rounded-full px-2 sm:px-4 py-1 text-gray-600 sm:text-sm text-xs font-medium">{donatedUser.displayName}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-3 my-1">{donatedUser.title}</h3>
                    <p className="text-gray-500 mb-1 sm:mb-2">{(donatedUser.description || donatedUser.desc)?.substring(0, 150)}....</p>
                    <div className="justify-between flex items-center mb-1">
                        <p className="text-gray-500 font-medium cursor-pointer">Category: <span className="font-normal text-gray-500">{donatedUser.category || donatedUser.campaign_type}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation;