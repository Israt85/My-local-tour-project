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
        axios.get('https://my-local-tour-project-server.vercel.app/service')
            .then(res => {
                console.log(res.data);
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

             <div className="mx-10">
                <fieldset className="w-96 space-y-1 my-4 text-gray-100">
	<label className="hidden">Search</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-72 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="bg-[#45CFDD]" viewBox="0 0 512 512" className="w-4 h-4 text-gray-100">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="text" placeholder="Type here" className="input input-bordered bg-gray-300 input-info w-full  max-w-xs" />
	</div>
</fieldset>
</div>

            {
                loading ? <div className="w-full h-96 mx-96 my-32"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div> : <>
                    {
                        !isMore ? <div className="grid grid-cols-1 mx-10 gap-10">
                            {
                                allService.slice(0, 6).map(allserve => <AllServe key={allserve._id} allserve={allserve} ></AllServe>)
                            }
                        </div>
                            : <div className="grid grid-cols-1 mx-10 gap-10">
                                {
                                    allService.map(allserve => <AllServe key={allserve._id} allserve={allserve} ></AllServe>)
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