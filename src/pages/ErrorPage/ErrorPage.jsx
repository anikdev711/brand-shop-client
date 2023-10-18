import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h3>404 not found</h3>
            <Link to="/">
                <button>Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;