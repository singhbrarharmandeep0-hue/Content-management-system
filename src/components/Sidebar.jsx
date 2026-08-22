import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../styles/sidebar.css";

import {
  FaHome,
  FaPlus,
  FaFileAlt,
  FaCog,
  FaChartBar,
  FaUserCircle
} from "react-icons/fa";

function Sidebar() {
 // useGSAP(() => {

  //gsap.from(".sidebar-menu a", {
   // x: -50,
   // opacity: 0,
   // stagger: 0.1,
   // duration: 0.6
 // });

//}
//, []);

  const { t } = useTranslation();

  const location = useLocation();

 const menu = [
  {
    name: t("dashboard"),
    path: "/",
    icon: <FaHome />
  },
  {
    name: t("add_post"),
    path: "/add-post",
    icon: <FaPlus />
  },
  {
    name: t("view_posts"),
    path: "/view-post",
    icon: <FaFileAlt />
  },
  {
    name: t("analytics"),
    path: "/analytics",
    icon: <FaChartBar />
  },
  {
    name: t("settings"),
    path: "/settings",
    icon: <FaCog />
  }
];
  

  return (

    <aside className="sidebar">

      <div className="sidebar-top">

        <FaUserCircle className="sidebar-avatar" />

        <h3>Administrator</h3>

        <p>Content Manager</p>

      </div>

      <nav className="sidebar-menu">

        {menu.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={location.pathname === item.path ? "active-link" : ""}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>

        ))}

      </nav>

      <div className="sidebar-bottom">

        <h4>Quick Tip</h4>

        <p>
          Keep your articles updated regularly for better engagement.
        </p>

      </div>

    </aside>

  );

}

export default Sidebar;