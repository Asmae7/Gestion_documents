import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unblockCommentaire } from "./commentaireSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const DeblocageForm = () => {
  const dispatch = useDispatch();
  const commentaires = useSelector((state) => state.comentaire.commentaires);

  // Filtrer les commentaires bloqués
  const commentairesBloques = commentaires.filter(commentaire => commentaire.etat_commentaire === "2");

  const [selectedComments, setSelectedComments] = useState([]);

  const handleToggleSelectComment = (codeCommentaire) => {
    // Basculer la sélection d'un commentaire
    setSelectedComments((prevSelectedComments) => {
      if (prevSelectedComments.includes(codeCommentaire)) {
        return prevSelectedComments.filter((selectedCode) => selectedCode !== codeCommentaire);
      } else {
        return [...prevSelectedComments, codeCommentaire];
      }
    });
  };

  const handleUnblockComments = () => {
    // Débloquer les commentaires sélectionnés
    selectedComments.forEach((codeCommentaire) => {
      dispatch(unblockCommentaire({ code_commentaire: codeCommentaire }));
    });

    // Vider la liste des commentaires sélectionnés
    setSelectedComments([]);
  };

  return (
    <div>
      <Link to="/blockage" className="btn btn-primary mr-2">
        Consultation de Bloquage
      </Link>
      <Link to="/DeblocageForm" className="btn btn-secondary">
        Déblocage de Commentaires
      </Link>
      <h2>Déblocage des Commentaires</h2>
      <ul className="list-group">
        {commentairesBloques.map((commentaire) => (
          <li key={commentaire.code_commentaire} className="list-group-item">
            <p>{commentaire.texte_commentaire}</p>
            <p>Date de dépôt: {commentaire.date_commentaire}</p>
            <input
              type="checkbox"
              checked={selectedComments.includes(commentaire.code_commentaire)}
              onChange={() => handleToggleSelectComment(commentaire.code_commentaire)}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={handleUnblockComments}
        disabled={selectedComments.length === 0}
        className="btn btn-success mt-3"
      >
        Débloquer les commentaires sélectionnés
      </button>
    </div>
  );
};

export default DeblocageForm;
