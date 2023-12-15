import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";


const FeedBackForm = () => {
    const {user} = useContext(AuthContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const form = e.target
        const name= form.name.value;
        const location =form.location.value;
        const feedback = form.feedback.value
        const photo = user?.photoURL
       const obj = {name,location,feedback,photo}
       console.log(obj);

       axios.post('https://my-local-tour-project-server.vercel.app/feedback',obj)
       .then(res=>{
        console.log(res.data);
       })


    }
    return (
        <div>
            <div className="hero h-auto bg-base-200">
               
                <div className="hero-content flex flex-col">
                <h2>Give a FeedBack</h2>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" placeholder="your location" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">FeedBack</span>
                                </label>
                                <textarea name="feedback" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBackForm;