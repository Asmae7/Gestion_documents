import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserRole } from "./roleSlice";
import { deleteUser } from "./utilisateurSlice";
import { Link } from "react-router-dom";

const GestionUtilisateursForm = () => {
  const utilisateurs = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [newRole, setNewRole] = useState("");
  const [updatedRole, setUpdatedRole] = useState("");

  const utilisateurActuel = utilisateurs[currentIndex];

  const handleFirst = () => {
    setCurrentIndex(0);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return 0;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < utilisateurs.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  const handleLast = () => {
    setCurrentIndex(utilisateurs.length - 1);
  };

  const handleUpdateRole = () => {
    dispatch(updateUserRole({ login: utilisateurActuel.login, newRole: newRole }));
    setUpdatedRole(newRole);
    setNewRole("");
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(utilisateurActuel.login));
    setCurrentIndex(0);
  };

  return (
    <div>
      <Link to="/Userform" className="btn btn-primary mr-2">
        Consultation des Utilisateurs
      </Link>
      <Link to="/Userformpass" className="btn btn-primary mr-2">
        Consultation des Mots de Passe
      </Link>
      <Link to="/CommentairesParMembreForm" className="btn btn-primary mr-2">
        Les commentaires de chaque Membre
      </Link>
      <h2>Gestion des Utilisateurs</h2>

      {utilisateurActuel && (
        <div>
          <p>Nom: {utilisateurActuel.nom}</p>
          <p>Login: {utilisateurActuel.login}</p>
          <p>Role: {utilisateurActuel.role}</p>
        </div>
      )}

      <div>
        <button className="btn btn-info mr-2" onClick={handleFirst}>
          Premier
        </button>
        <button className="btn btn-info mr-2" onClick={handlePrevious}>
          Précédent
        </button>
        <button className="btn btn-info mr-2" onClick={handleNext}>
          Suivant
        </button>
        <button className="btn btn-info" onClick={handleLast}>
          Dernier
        </button>
      </div>

      <div>
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Nouveau rôle"
          className="form-control mr-2"
        />
        <button className="btn btn-success mr-2" onClick={handleUpdateRole}>
          Modifier le rôle
        </button>
        <button className="btn btn-danger" onClick={handleDeleteUser}>
          Supprimer
        </button>
      </div>

      {updatedRole && (
        <div>
          <p>Rôle mis à jour : {updatedRole}</p>
        </div>
      )}
      <Link to="/Userformpass" className="btn btn-warning">
        Initialiser le mot de passe
      </Link>
    </div>
  );
};

export default GestionUtilisateursForm;
