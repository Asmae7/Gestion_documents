// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   commentaires: [
//     { code_commentaire: 2, date_commentaire: '5-01-2014', texte_commentaire: "piw oiw", etat_commentaire: "nouvelle", code_document: 2, login: "asmae6@gmail.com" },
//     { code_commentaire: 1, date_commentaire: '23-11-2012', texte_commentaire: "nice pic", etat_commentaire: "nouvelle", code_document: 1, login: "john_doe@gmail.com" },
//     { code_commentaire: 3, date_commentaire: '25-11-2012', texte_commentaire: "Meow", etat_commentaire: "bloquee", code_document: 1, login: "asmae6@gmail.com" }
//   ],
//   filterUser: []
// };

// const commentaireSlice = createSlice({
//   name: "commentaireSlice",
//   initialState,
//   reducers: {
//     blockCommentaire: (state, action) => {
//       state.commentaires = state.commentaires.filter((commentaire) => commentaire.code_commentaire !== action.payload);
//     },
//     unblockCommentaire: (state, action) => {
//       const commentaire = state.commentaires.find((commentaire) => commentaire.code_commentaire === action.payload);
//       if (commentaire) {
//         commentaire.etat_commentaire = "nouvelle";
//       }
//     },
//     filterCommentsByUser: (state, action) => {
//       state.filterUser = action.payload;
//     },
//     deleteSelectedComments: (state, action) => {
//       // Filter out the selected comments from the commentaires array
//       state.commentaires = state.commentaires.filter((commentaire) => !action.payload.includes(commentaire.code_commentaire));
//     },
//   },
// });

// export const { blockCommentaire, unblockCommentaire, filterCommentsByUser, deleteSelectedComments } = commentaireSlice.actions;
// export default commentaireSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentaires: [
    { code_commentaire: 2, date_commentaire: '5-01-2014', texte_commentaire: "piw oiw", etat_commentaire: "2", code_document: 2, login: "asmae6@gmail.com" },
    { code_commentaire: 1, date_commentaire: '23-11-2012', texte_commentaire: "nice pic", etat_commentaire: "2", code_document: 1, login: "john_doe@gmail.com" },
    { code_commentaire: 3, date_commentaire: '25-11-2012', texte_commentaire: "Meow", etat_commentaire: "1", code_document: 1, login: "asmae6@gmail.com" }
  ],
  filterUser: []
};

const commentaireSlice = createSlice({
  name: "commentaireSlice",
  initialState,
  reducers: {
    blockCommentaire: (state, action) => {
      const { code_commentaire } = action.payload;
      state.commentaires = state.commentaires.filter(commentaire => {
        if (commentaire.code_commentaire === code_commentaire && commentaire.etat_commentaire === "2") {
          return false;
        }
        return true;
      });
    },

    unblockCommentaire: (state, action) => {
      const { code_commentaire } = action.payload;
      // Mettre à jour l'état_commentaire du commentaire à "1" (ou à la valeur appropriée pour débloquer)
      const commentaireToUnblock = state.commentaires.find(commentaire => commentaire.code_commentaire === code_commentaire);
      if (commentaireToUnblock) {
        commentaireToUnblock.etat_commentaire = "1"; // Mettez à jour avec la valeur appropriée pour débloquer
      }
    },

    filterCommentsByUser: (state, action) => {
      state.filterUser = action.payload;
    },
    deleteSelectedComments: (state, action) => {
      state.commentaires = state.commentaires.filter((commentaire) => !action.payload.includes(commentaire.code_commentaire));
    },
  },
});

export const { blockCommentaire, unblockCommentaire, filterCommentsByUser, deleteSelectedComments } = commentaireSlice.actions;
export default commentaireSlice.reducer;
