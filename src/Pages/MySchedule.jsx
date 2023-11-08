import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Booking from "../Components/Booking";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure";

const MySchedule = () => {
    const {user} = useContext(AuthContext)

    const [myBookings, setMyBookings] = useState([])
    const axiosSecure = useAxiosSecure()
    const url = `/booking?email=${user?.email}`
    useEffect(()=>{
        //  axios.get(`https://my-local-tour-project-server.vercel.app/booking?email=${user?.email}`,{
        //     withCredentials: true
        //  })
        //  .then(res=>{
        //     console.log(res.data);
        //     setMyBookings(res.data)
        //  })
        axiosSecure.get(url)
        .then(res => setMyBookings(res.data))
    },[axiosSecure, url])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Schedule</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2>my schedule :{myBookings.length} </h2>
            <div className=" w-[max-content] mx-auto my-10">
            {
                myBookings.map(booking => <Booking key={booking._id} booking={booking} ></Booking> )
            }
            </div>
        </div>
    );
};

export default MySchedule;