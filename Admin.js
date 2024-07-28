import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

export default function Acceuil() {
  const { id } = useParams();
  const utilisateurs = useSelector((state) => state.user.user);
  const user = utilisateurs.find((u) => u.id === parseInt(id));

  return (
    <div>
      <h1>Bonjour {user ? user.nom : ""}</h1>

      {user && user.role === "Modérateur" && (
        <div>
          <Link to="/blockage" className="btn btn-primary mr-2">
            Consultation de Bloquage
          </Link>
          <Link to="/DeblocageForm" className="btn btn-secondary">
            Déblocage de Commentaires
          </Link>
        </div>
      )}

      {user && user.role === "Administrateur" && (
        <div>
          <Link to="/Userform" className="btn btn-primary mr-2">
            Consultation des Utilisateurs
          </Link>
          <Link to="/Userformpass" className="btn btn-primary mr-2">
            Consultation des Mots de Passe
          </Link>
          <Link to="/CommentairesParMembreForm" className="btn btn-primary mr-2">
          les commentaire de chaque Membre
          </Link>
        </div>
      )}
        {user && user.role === "Membre" && (
        <div>
          <Link to="/DocumentSearch" className="btn btn-primary mr-2">
            Chercher un document
          </Link>
          
        </div>
      )}
    </div>
  );
}



