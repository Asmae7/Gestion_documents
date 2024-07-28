import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap stylesheet

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Accueil</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/inscription">Inscription</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Userform">Gestion des Utilisateurs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Userformpass">Changer le Mot de Passe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blockage">Consultation de Bloquage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DeblocageForm">Déblocage de Commentaires</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CommentairesParMembreForm">Commentaires par Membre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DocumentSearch">Recherche de Documents</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

