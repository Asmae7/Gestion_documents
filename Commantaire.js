import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blockCommentaire, deleteSelectedComments } from "./commentaireSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const ModerationForm = () => {
  const dispatch = useDispatch();
  const commentaires = useSelector((state) => state.comentaire.commentaires);
  const [selectedComments, setSelectedComments] = useState([]);

  const handleBlockComment = (codeCommentaire) => {
    dispatch(blockCommentaire({ code_commentaire: codeCommentaire }));
  };

  const handleCheckboxChange = (codeCommentaire) => {
    const isSelected = selectedComments.includes(codeCommentaire);

    if (isSelected) {
      setSelectedComments(selectedComments.filter((comment) => comment !== codeCommentaire));
    } else {
      setSelectedComments([...selectedComments, codeCommentaire]);
    }
  };

  const handleDeleteSelectedComments = () => {
    dispatch(deleteSelectedComments(selectedComments));
    setSelectedComments([]);
  };

  const sortedCommentaires = commentaires.slice().sort((a, b) => new Date(b.date_commentaire) - new Date(a.date_commentaire));

  return (
    <div>
      <Link to="/blockage" className="btn btn-primary mr-2">
        Consultation de Bloquage
      </Link>
      <Link to="/DeblocageForm" className="btn btn-secondary">
        Déblocage de Commentaires
      </Link>
      <h2>Moderation des Commentaires</h2>
      <button className="btn btn-danger mb-3" onClick={handleDeleteSelectedComments}>
        Supprimer les commentaires sélectionnés
      </button>
      <ul className="list-group">
        {sortedCommentaires.map((commentaire) => (
          <li key={commentaire.code_commentaire} className="list-group-item">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedComments.includes(commentaire.code_commentaire)}
                onChange={() => handleCheckboxChange(commentaire.code_commentaire)}
              />
              <label className="form-check-label ml-2">{commentaire.texte_commentaire}</label>
            </div>
            <p>Date de dépôt: {commentaire.date_commentaire}</p>
            <button className="btn btn-warning" onClick={() => handleBlockComment(commentaire.code_commentaire)}>
              Bloquer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModerationForm;

