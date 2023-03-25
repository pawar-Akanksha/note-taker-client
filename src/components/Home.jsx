import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const Home = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/api/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/api/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    console.log("User Logout");
  }

  const username = userInfo?.username;

  return (
    <div>
      {username && (
        <>
          <div className="homecont">
            <Navbar />
          </div>
        </>
      )}
      {!username && (
        <>
            <p>You need to login..Session expired</p>
        </>
      )
      }
    </div>
  );
};

export default Home;