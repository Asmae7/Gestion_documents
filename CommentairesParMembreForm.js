import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const CommentairesParMembreForm = () => {
  const [selectedMembre, setSelectedMembre] = useState("");
  const commentaires = useSelector((state) => state.comentaire.commentaires);
  const membres = useSelector((state) => state.user.user);

  const commentairesParMembre = commentaires.filter((commentaire) => commentaire.login === selectedMembre);

  const handleSelectMembre = (e) => {
    const selectedMembre = e.target.value;
    setSelectedMembre(selectedMembre);
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
      <h2>Commentaires par Membre</h2>
      <div className="form-group">
        <label>Sélectionnez un membre :</label>
        <select
          className="form-control"
          onChange={handleSelectMembre}
          value={selectedMembre}
        >
          {membres.map((membre) => (
            <option key={membre.login} value={membre.login}>
              {membre.nom}
            </option>
          ))}
        </select>
      </div>

      {selectedMembre && (
        <div>
          <h3>Commentaires postés par {selectedMembre}</h3>
          <ul className="list-group">
            {commentairesParMembre.map((commentaire) => (
              <li key={commentaire.code_commentaire} className="list-group-item">
                <p>{commentaire.texte_commentaire}</p>
                <p>Date de dépôt: {commentaire.date_commentaire}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentairesParMembreForm;


