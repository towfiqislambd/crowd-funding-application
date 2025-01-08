import { useLoaderData } from "react-router-dom";
import RunningCampaign from "./RunningCampaign";
import About from "./About";
import Target from "./Target";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

const Home = () => {
    const campaigns = useLoaderData();
    return (
        <div className="bg-white text-black dark:bg-gray-950 dark:text-white">
            <Slider></Slider>
            <About></About>
            <RunningCampaign campaigns={campaigns}></RunningCampaign>
            <Testimonial></Testimonial>
            <Target></Target>
        </div>
    )
}

export default Home;