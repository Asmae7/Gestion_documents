import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

export default function FormConnexion() {
  const users = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find((u) => u.login === login && u.pass === pass);

    if (foundUser) {
      navigate(`/acceuil/${foundUser.id}`);
    } else {
      alert("Erreur: utilisateur non trouvé");
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login:
          </label>
          <input type="text" className="form-control" id="login" onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Pass:
          </label>
          <input type="password" className="form-control" id="pass" onChange={(e) => setPass(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Connexion
        </button>
      </form>
      <Link to="/inscription" className="btn btn-secondary mt-2">
        Inscription
      </Link>
    </div>
  );
}




