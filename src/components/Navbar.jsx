import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaSearch
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/navbar.css";

function Navbar({search, setSearch}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());


useEffect(() => {

    const timer = setInterval(() => {

        setTime(new Date());

    },1000);

    return () => clearInterval(timer);
const focus=()=>{

gsap.to(".search-nav",{
scale:1.05,
duration:0.3
});

}

const blur=()=>{

gsap.to(".search-nav",{
scale:1,
duration:0.3
});

}


},[]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
    window.location.reload();
  };

  const focus=()=>{

gsap.to(".search-nav",{
scale:1.05,
duration:0.3
});

}

const blur=()=>{

gsap.to(".search-nav",{
scale:1,
duration:0.3
});

}

  return (

    <nav className="navbar">

<div className="logo">

    <img
        src={logo}
        alt="Contentify"
    />

    <div>

        <h2 id="logo-text">Contentify</h2>

        <p>{t("dashboard")}</p>

    </div>

</div>

      <div className="navbar-right">

        <div className="search-nav">

          <FaSearch />

          <input
            type="text"
            placeholder={t("search_posts")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

       
<div className="admin-info">

    <FaUserCircle className="avatar"/>

    <div>

        <h4>{t("admin")}</h4>

        <small>
            {time.toLocaleDateString()}
        </small>

    </div>

</div>

        <button
          className="navbar-logout"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          {t("logout")}

        </button>

      </div>

    </nav>

  );

}

export default Navbar;
