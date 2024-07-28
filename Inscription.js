import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utilisateurSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

export default function Inscription() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.role.roles);
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [login, setLogin] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const Valider = (e) => {
    dispatch(addUser({ nom, login, role: selectedRole }));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom:
          </label>
          <input type="text" className="form-control" id="nom" onChange={(e) => setNom(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login:
          </label>
          <input type="text" className="form-control" id="login" onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Rôle:
          </label>
          <select className="form-select" id="role" onChange={(e) => setSelectedRole(e.target.value)}>
            {roles.map((role) => (
              <option key={role.role} value={role.role}>
                {role.role}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={Valider}>
          Valider
        </button>
      </form>
    </div>
  );
}
