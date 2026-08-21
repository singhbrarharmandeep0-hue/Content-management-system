import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaMoon,
    FaBell,
    FaGlobe,
    FaLock,
    FaInfoCircle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Settings() {
const { t, i18n } = useTranslation();
const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}, [darkMode]);

const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
        "theme",
        newTheme ? "dark" : "light"
    );
};
    const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
    );

  const [notifications, setNotifications] = useState(() => {
    return JSON.parse(localStorage.getItem("notifications")) ?? true;
  });

      useEffect(() => {
    localStorage.setItem("language", language);
 }, [language]);

  useEffect(() => {
    localStorage.setItem(
        "notifications",
        JSON.stringify(notifications)
    );
}, [notifications]);
const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem("loggedIn");

    navigate("/login");

    window.location.reload();
};



const handlePasswordChange = () => {

  const current = prompt("Enter current password:");

  if (current === null) return;

  const savedPassword = localStorage.getItem("password");

  if (current !== savedPassword) {
    alert("Current password is incorrect!");
    return;
  }

  const newPassword = prompt("Enter new password:");

  if (newPassword === null || newPassword.trim() === "") {
    alert("Password cannot be empty.");
    return;
  }

  const confirmPassword = prompt("Confirm new password:");

  if (confirmPassword !== newPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("password", newPassword);

  alert("Password changed successfully!");

};



  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <main className="content">

          <div className="page-header">

    <h1>{t("settings")}</h1>

    <p>

       {t("appearance")}, {t("notifications")}, {t("language")}, {t("security")}, {t("system_information")}.

    </p>

</div>

  <div className="settings-card">

   <div className="settings-grid">

    <div className="setting-box">

        <FaMoon className="setting-icon"/>

        <h2>{t("appearance")}</h2>

        <p>{t("customize_application_theme")}</p>

        <button onClick={toggleTheme}>
            {darkMode ? t("light_mode") : t("dark_mode")}
        </button>

    </div>

    <div className="setting-box">

        <FaBell className="setting-icon"/>

        <h2>{t("notifications")}</h2>

<label>

<input
    type="checkbox"
    checked={notifications}
    onChange={() =>
        setNotifications(!notifications)
    }
/>

{t("enable_email_notifications")}

</label>

    </div>

    <div className="setting-box">

        <FaGlobe className="setting-icon"/>

        <h2>{t("language")}</h2>

<select

value={language}

onChange={(e)=>{

const selected=e.target.value;

setLanguage(selected);

const code=

selected==="English"

? "en"

: selected==="Hindi"

? "hi"

: "pa";

i18n.changeLanguage(code);

localStorage.setItem("languageCode",code);

}}

>

<option>English</option>

<option>Hindi</option>

<option>Punjabi</option>

</select>

    </div>

    <div className="setting-box">

        <FaLock className="setting-icon"/>

        <h2>Security</h2>

<button className="password-btn" onClick={handlePasswordChange}>
    
    Change Password
</button>

        <button
            className="logout-btn"
            onClick={handleLogout}
        >
            Logout
        </button>

    </div>

</div>

<div className="system-card">

    <FaInfoCircle className="setting-icon"/>

    <h2>{t("system_information")}</h2>

    <p><strong>{t("cms_version")}:</strong> 1.0</p>

    <p><strong>{t("theme")}:</strong> {darkMode ? t("dark") : t("light")}</p>

    <p><strong>{t("status")}:</strong> {t("online")}</p>

</div>

</div>
  <footer className="footer">
        <p>© 2026 Content Management System | All Rights Reserved</p>
    </footer>
        </main>
      </div>
    </>
  );
}

export default Settings;