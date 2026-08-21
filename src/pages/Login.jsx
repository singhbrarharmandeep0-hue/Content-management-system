import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


function Login({ setIsLoggedIn }) {
  useGSAP(() => {

  gsap.from(".left-panel", {
    x: -100,
    opacity: 0,
    duration: 1
  });

  gsap.from(".login-card", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  });

}, []);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Initialize default password
useEffect(() => {
  if (!localStorage.getItem("password")) {
    localStorage.setItem("password", "admin123");
  }
}, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedPassword = localStorage.getItem("password");

    if (
      email === "admin@contentify.com" &&
      password === savedPassword
    ) {
      localStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
  <div className="login-page">

    <div className="left-panel">

      <img src={logo} alt="Contentify" className="left-logo" />

      <h1>Contentify CMS</h1>

      <p className="tagline">
        {t("manage_create_inspire")}
      </p>

      <div className="features">

        <p>✅ {t("create_publish_articles")}</p>

        <p>🖼 {t("upload_images")}</p>

        <p>🔍 {t("smart_search")}</p>

        <p>📂 {t("organize_categories")}</p>

        <p>📊 {t("analytics_dashboard")}</p>

      </div>

      <div className="quote">

        <h3>Today's Quote</h3>

        <p>
          {t("quote")}
        </p>

      </div>

    </div>


    <div className="right-panel">

      <div className="login-card">

        <img
          src={logo}
          alt="logo"
          className="login-logo"
        />

        <h2>{t("welcome")} 👋</h2>

        <p>{t("login_to_continue")}</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder={t("email_address")}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <div className="password-box">

            <input
              type={showPassword ? "text":"password"}
              placeholder={t("password")}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button
              type="button"
              className="eye"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈":"👁"}
            </button>

          </div>

          <div className="login-options">

            <label>
              <input type="checkbox"/>
              {t("remember_me")}
            </label>

            <a href="#">{t("forgot_password")}</a>

          </div>

          <button type="submit">
            Login →
          </button>

        </form>

        <div className="demo">

          <strong>Demo Login</strong>

          <p>Email: admin@contentify.com</p>

          <p>Password: {localStorage.getItem("password")}</p>

        </div>

      </div>

    </div>

  </div>
);
}

export default Login;