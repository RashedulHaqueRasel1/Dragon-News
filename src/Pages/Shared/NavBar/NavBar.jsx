import { NavLink } from "react-router-dom";
import userPic from '../../../assets/user.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext)
    const [success, setSuccess] = useState();

    const handleLogOut = () => {
        userLogOut()
            .then(result => {
                console.log(result.user)
                setSuccess('login')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
        <li><NavLink to={'/Profile'}>Profile</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/registration'}>Registration</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                    {
                        user ?
                            <div className="w-10 rounded-full tooltip tooltip-left" data-tip="hello">
                                <img className="tooltip tooltip-left" data-tip="hello" alt="Tailwind CSS Navbar component" src={userPic} />
                            </div>

                            :

                            <button className="btn"> google</button>

                    }

                </div>
                

                {
                    user ?
                        <button onClick={handleLogOut} className="btn"> LogOut</button>
                        :

                        <NavLink to={'/login'}>
                            <button className="btn tooltip tooltip-left" data-tip="hello"> Login</button>
                        </NavLink>
                }


            </div>

            <p className="text-red-600">{success}</p>

           
        </div>
    );
};

export default NavBar;