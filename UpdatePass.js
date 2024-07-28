import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserPassword } from "./utilisateurSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

export default function GestionUtilisateurspass() {
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordInitialization = (e) => {
    e.preventDefault();

    const userToUpdate = users.find((u) => u.login === login);

    if (userToUpdate) {
      if (newPassword === confirmPassword) {
        dispatch(updateUserPassword({ login: login, newPassword: newPassword }));

        setLogin("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert("Passwords incorrect");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="container mt-4">
      <Link to="/Userform" className="btn btn-primary mr-2">
        Consultation des Utilisateurs
      </Link>
      <Link to="/Userformpass" className="btn btn-primary mr-2">
        Consultation des Mots de Passe
      </Link>
      <Link to="/CommentairesParMembreForm" className="btn btn-primary mr-2">
        Les commentaires de chaque Membre
      </Link>
      <h2>Initialiser le mot de passe</h2>
      <form onSubmit={handlePasswordInitialization}>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login:
          </label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password:
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Initialiser le mot de passe
        </button>
      </form>
    </div>
  );
}
