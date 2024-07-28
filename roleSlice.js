import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [
    { role: "Membre", login: "john_doe@gmail.com" },
    { role: "Modérateur", login: "moderator_user@gmail.com" },
    { role: "Administrateur", login: "admin_user@gmail.com" }
  ]
};

const roleSlice = createSlice({
  name: "roleSlice",
  initialState,
  reducers: {
    updateUserRole: (state, action) => {
      const { login, newRole } = action.payload;

      
      const userToUpdate = state.roles.find((user) => user.login === login);

      
      if (userToUpdate) {
        userToUpdate.role = newRole;
      }
    }
  }
});

export const { updateUserRole } = roleSlice.actions;
export default roleSlice.reducer;
