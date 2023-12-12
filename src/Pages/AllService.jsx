import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AllServe from "../Components/AllServe";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

const AllService = () => {
    const { loading } = useContext(AuthContext)
    const [allService, setAllService] = useState([])
    const [isMore, setIsMore] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:5000/service')
            .then(res => {
                console.log('from client',res.data);
                setAllService(res.data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Services Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

             
            {
                loading ? <div className="w-full h-96 mx-96 my-32"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div> : <>
                    {
                        !isMore ? <div className="grid grid-cols-1 mx-10 gap-10">
                            {
                                allService?.slice(0, 6).map(allserve => <AllServe key={allserve._id} allserve={allserve} ></AllServe>)
                            }
                        </div>
                            : <div className="grid grid-cols-1 mx-10 gap-10">
                                {
                                    allService?.map(allserve => <AllServe key={allserve._id} allserve={allserve} ></AllServe>)
                                }
                            </div>
                    }
                </>

            }
            <div className={`w-[max-content] mx-auto ${isMore? 'hidden': ''}`}>
                <button onClick={() => setIsMore(!isMore)} className="btn bg-gradient-to-r from-sky-500 to-indigo-500">More</button>
            </div>
        </div>
    );
};

export default AllService;