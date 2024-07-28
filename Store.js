import { configureStore } from "@reduxjs/toolkit";
import documentSlice from "./documentSlice";
import utilisateurSlice from "./utilisateurSlice";
import roleSlice from "./roleSlice";
import commentaireSlice from "./commentaireSlice";
 export const store =configureStore ({
    reducer:{
        comentaire :commentaireSlice,
    role:roleSlice,
    user:utilisateurSlice,
    document:documentSlice
    }
 })
 