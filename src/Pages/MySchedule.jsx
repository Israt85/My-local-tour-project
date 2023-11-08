import axios from "axios";
import { useEffect, useState } from "react";
import Booking from "../Components/Booking";

const MySchedule = () => {

    const [myBookings, setMyBookings] = useState([])
    useEffect(()=>{
         axios.get('http://localhost:5000/booking')
         .then(res=>{
            console.log(res.data);
            setMyBookings(res.data)
         })
    },[])
    return (
        <div>
            <h2>my schedule :{myBookings.length} </h2>
            <div className="grid grid-cols-2 gap-6 mx-4">
            {
                myBookings.map(booking => <Booking key={booking._id} booking={booking} ></Booking> )
            }
            </div>
        </div>
    );
};

export default MySchedule;