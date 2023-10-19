import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";

const Login = () => {
    const { userGoogleSignIn, userEmailPasswordLogin } = useContext(AuthContext);
    const [userLogInError, setUserLogInError] = useState('');

    const handleUserGoogleLogIn = (e) => {
        e.preventDefault();

        userGoogleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleUserEmailPasswordLogIn = (e) => {
        e.preventDefault();
        const logInForm = new FormData(e.currentTarget);
        const email = logInForm.get('email');
        const password = logInForm.get('password')
        console.log(email, password);

        userEmailPasswordLogin(email, password)
            .then(result => {
                console.log(result.user);
                const user = {
                    email,
                    lastLoggedAtTime: result.user.metadata.lastSignInTime
                }
                fetch('http://localhost:5000/users', {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

            })
            .catch(error => {
                console.log(error);
                setUserLogInError(error.message)
            })

    }




    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold mt-16">Login Now</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleUserEmailPasswordLogIn}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    userLogInError && <p>{userLogInError}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Login</button>
                            </div>
                            <p className="text-center mt-5">__OR__</p>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleUserGoogleLogIn}
                                    className="btn btn-secondary text-white font-bold">Google Login</button>
                            </div>
                        </form>
                        <div className="text-center p-10">
                            <p>New here?</p>
                            <Link to="/register"> <span className="text-blue-700 font-bold">Create Account</span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;