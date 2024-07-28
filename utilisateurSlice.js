import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [
    { id:1,login: "asmae@gmail.com", nom: "asmae", pass: "asmae123", role: "Membre" },
    { id:2,login: "kawtar@gmail.com", nom: "kawtar", pass: "kawtar123", role: "Modérateur" },
    { id:3,login: "john_doe@gmail.com", nom: "john", pass: "john123", role: "Administrateur" },
  ]
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push({
        login: action.payload.login,
        nom: action.payload.nom,
        pass: action.payload.pass,
        role: action.payload.role
      });
    },
    deleteUser: (state, action) => {
      const { login } = action.payload;
      state.user = state.user.filter(user => user.login !== login);
    },
    updateUserPassword: (state, action) => {
      const { login, newPassword } = action.payload;
      const userToUpdate = state.user.find(user => user.login === login);

      if (userToUpdate) {
        userToUpdate.pass = newPassword;
      }
    },

  },
});

export const { addUser, deleteUser, updateUserPassword } = documentSlice.actions;
export default documentSlice.reducer;
