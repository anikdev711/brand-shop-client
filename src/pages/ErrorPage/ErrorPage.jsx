import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">

                <h3 className="text-3xl font-extrabold">404 Not Found</h3>
                <Link to="/">
                    <button className="btn btn-error font-bold text-2xl mt-5">Go Home</button>
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;