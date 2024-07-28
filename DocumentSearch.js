import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const DocumentSearch = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const documents = useSelector((state) => state.document.documents);
  const themes = useSelector((state) => state.document.documents); 

  const handleSelectTheme = (e) => {
    const theme = e.target.value;
    setSelectedTheme(theme);
  };

  const filteredDocuments = documents.filter((document) => document.nom_theme === selectedTheme);

  return (
    <div className="container mt-4">
      <h2>Recherche de Documents par Thème</h2>
      <label htmlFor="theme" className="form-label">
        Sélectionnez un thème :
      </label>
      <select
        id="theme"
        onChange={handleSelectTheme}
        value={selectedTheme}
        className="form-select"
      >
        
        {themes.map((theme) => (
          <option key={theme.nom_theme} value={theme.nom_theme}>
            {theme.nom_theme}
          </option>
        ))}
      </select>

      {selectedTheme && (
        <div>
          <h3>Documents pour le thème : {selectedTheme}</h3>
          <ul className="list-group">
            {filteredDocuments.map((document) => (
              <li key={document.code_document} className="list-group-item">
                <p>Nom du document : {document.nom_document}</p>
                <p>État du document : {document.etat_document}</p>
                <p>Propriétaire : {document.login}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentSearch;


