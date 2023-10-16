import React from "react";
import './style.css';
import Banner from "../images/banner.jpeg";
import { NavLink } from "react-router-dom";


function Home() {
    const logout = () => {
        localStorage.removeItem("user_login")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
                <h2>Best Online Food In India</h2>
                <p>Welcome {localStorage.getItem("name")}</p>
                <button onClick={logout} className="logout">LogOut</button>
                <button onClick={deleteAccount} className="delete">Delete Account</button>
                <div className="headerContainer">

                    <NavLink to="/">
                        <button>ORDER NOW</button>
                    </NavLink>
                </div>


            </div>
        </div>
    );
}
export default Home;

