import { useLoaderData } from "react-router-dom";


const SingleService = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
        <div>
            <h2>single</h2>
        </div>
    );
};

export default SingleService;