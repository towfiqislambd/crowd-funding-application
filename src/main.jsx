import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import AuthProvider from './components/AuthProvider';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AllCampaign from './components/AllCampaign';
import AddNewCampaign from './components/AddNewCampaign';
import MyCampaign from './components/MyCampaign';
import MyDonations from './components/MyDonations';
import PrivateRoutes from './components/PrivateRoutes';
import UpdateCampaign from './components/UpdateCampaign';
import Details from './components/Details';
import SingleUser from './components/SingleUser';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Support from './components/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('https://crowd-funding-rouge.vercel.app'),
        element: <Home></Home>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/support",
        element: <Support></Support>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/all-campaign",
        loader: () => fetch('https://crowd-funding-rouge.vercel.app/all-campaign'),
        element: <AllCampaign></AllCampaign>
      },
      {
        path: "/all-campaign/:id",
        loader: ({ params }) => fetch(`https://crowd-funding-rouge.vercel.app/all-campaign/${params.id}`),
        element: <SingleUser></SingleUser>
      },
      {
        path: "/update-campaign/:id",
        loader: ({ params }) => fetch(`https://crowd-funding-rouge.vercel.app/update-campaign/${params.id}`),
        element: <PrivateRoutes><UpdateCampaign></UpdateCampaign></PrivateRoutes>
      },
      {
        path: "/campaign/:id",
        loader: ({ params }) => fetch(`https://crowd-funding-rouge.vercel.app/campaign/${params.id}`),
        element: <Details></Details>
      },
      {
        path: "/add-new-campaign",
        element: <PrivateRoutes><AddNewCampaign></AddNewCampaign></PrivateRoutes>
      },
      {
        path: "/my-campaign",
        element: <PrivateRoutes><MyCampaign></MyCampaign></PrivateRoutes>
      },
      {
        path: "/my-donations",
        element: <PrivateRoutes><MyDonations></MyDonations></PrivateRoutes>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
