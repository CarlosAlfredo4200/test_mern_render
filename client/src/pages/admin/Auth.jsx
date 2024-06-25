import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import Logo from "../../../public/logo.png"; // Ajusta la ruta según la ubicación real de logo.png en tu proyecto

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="auth">
      <h3>30 años formando líderes en Cristo para Colombia y las naciones</h3>
      <div className="form-base">
          <div className="divlogo">
            <img className="logo-auth" src={Logo} alt="Logo CPCS" />
          </div>
        <div className="formulario">

          <div className="divbtn">
            <div className="auth__tabs">
              <button
                className={activeTab === "login" ? "active" : ""}
                onClick={() => handleTabChange("login")}
              >
                Entrar
              </button>
              <button
                className={activeTab === "register" ? "active" : ""}
                onClick={() => handleTabChange("register")}
              >
                Nuevo usuario
              </button>
            </div>
            <div className="auth__forms">
              {activeTab === "login" && <LoginForm />}
              {activeTab === "register" && <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
