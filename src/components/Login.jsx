"use client";
import { useState } from "react";
import "@/styles/style_form_inicio.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (usuario === "ADMIN" && password === "ADMIN123") {
      window.location.href = "/administrador";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleGuestLogin = () => {
    window.location.href = "/invitado";
  };

  return (
    <div className="container">
      <img src="img/LOGO.png" alt="Descripción de la imagen" className="Imagen" />
      <div className="form-background">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="firstname"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="lastname"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit">Ingresar</button>
        </form>
        <p className="sign-up-divider">o inicia con</p>
        <div className="invitado">
          <button onClick={handleGuestLogin}>Invitado</button>
        </div>
      </div>
      <div className="login">
        <p>
          ¿Necesitas una cuenta? <a href="#">Registrarse</a>
        </p>
      </div>
    </div>
  );
};

export default Login;