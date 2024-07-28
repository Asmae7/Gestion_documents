// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import FormConnexion from "./FormConnexion";
import Inscription from "./Inscription";
// import CommentaireComponent from "./Commantaire"; 
import GestionUtilisateursForm from "./UserForm";
import GestionUtilisateurspass from "./UpdatePass";
import ConsultationBloquageForm from "./Commantaire";
import DeblocageForm from "./DeblocageForm";
import CommentairesParMembreForm from "./CommentairesParMembreForm";
import DocumentSearch from "./DocumentSearch";
import Header from "./Header";
import Acceuil from "./Admin";

export default function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<FormConnexion />} />
      <Route path="/acceuil/:id" element={<Acceuil />} />
      <Route path="/inscription" element={<Inscription />} />
      {/* <Route path="/commentaires" element={<CommentaireComponent />} />  */}
      <Route path="/Userform" element={<GestionUtilisateursForm />} />
      <Route path="/Userformpass" element={<GestionUtilisateurspass />} />
      <Route path="/blockage" element={< ConsultationBloquageForm />} />
      <Route path="/DeblocageForm" element={<DeblocageForm/>} />
      <Route path="/CommentairesParMembreForm" element={<CommentairesParMembreForm/>} />
      <Route path="/DocumentSearch" element={<DocumentSearch/>} />

      


    </Routes>
    </div>
  );
}
