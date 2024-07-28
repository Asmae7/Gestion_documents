// documentSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState =
{ documents:[{ code_document: 1, nom_document: 'Document 1', etat_document: 1, nom_theme: 'Theme A', login: 'john_doe@gmail.com' },
{ code_document: 2, nom_document: 'Document 2', etat_document: 2, nom_theme: 'Theme B', login: 'kawtar@gmail.com' },
{ code_document: 3, nom_document: 'Document 3', etat_document: 1, nom_theme: 'Theme C', login: 'asmae@gmail.com' }
]}


const documentSlice = createSlice({
  name: 'document',
  initialState,
    reducers: {

  },
});

export const {  } = documentSlice.actions;
export default documentSlice.reducer;
