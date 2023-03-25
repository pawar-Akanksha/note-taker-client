import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useEffect } from "react";

const NavBar = () => {
    const {userInfo,setUserInfo} = useContext(UserContext);
    useEffect(()=>{
        fetch("",{
            credentials:"include",
        }).then((response)=>{
            response.json().then((userInfo)=>{
                setUserInfo(userInfo)
            });
        })
    },[]);

    function logout(){
        fetch("https://note-10ek.onrender.com/api/logout",{
            credentials:"include",
            method:"POST",
        });
        setUserInfo(null);
        console.log("USER LOGOUT")
    }
    const email = userInfo?.email;
   
    return(
        <div className="navcont">
            <nav>
                <li>
                    <Link id="l1" to={"/home"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link id="l2" to={"/addnote"}>
                        AddNote
                    </Link>
                </li>
                <li>
                    <Link id="l3" to={"/deleteAll"}>
                        DeleteAll
                    </Link>
                </li>
                <li>
                    <Link id="14" onClick={logout} to={"/"}>
                        {email} Logout
                    </Link>
                </li>
            </nav>
        </div>
    )
};

export default NavBar;