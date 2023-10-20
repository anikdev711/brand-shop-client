import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const handleUserLogOut = () => {
        userLogOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">
            <div className="flex justify-center items-center -mt-3">
                <p className="badge badge-sm indicator-item block">My Cart</p>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {/* <span className="badge badge-sm indicator-item">My Cart</span> */}
                    </div>
                </label>
            </div>
        </NavLink></li>
        {/* <li><NavLink to="/login">Login</NavLink></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-center md:navbar-start lg:navbar-start flex flex-col md:flex-row lg:flex-row  justify-center items-center">
                        <img src="/logo.png" alt="" />
                        <a className="btn btn-ghost normal-case text-xl">Auto<span className="text-[#EF1D26] font-bold">Motorz</span>Wizdom</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex flex-col md:flex-col lg:flex-row gap-3 items-center">
                            <img src={user.photoURL ? user.photoURL : 'N/A'} alt="" />
                            <p>{user.displayName ? user.displayName : 'N/A'}</p>
                            <button
                                onClick={handleUserLogOut}
                                className="btn btn-success font-bold">
                                Logout
                            </button>
                        </div>
                        : <Link to="/login">
                            <button className="btn btn-info font-bold">
                                Login
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;