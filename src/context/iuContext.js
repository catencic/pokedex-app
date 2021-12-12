import { createContext } from "react";

export const uiContex = createContext({
    loading: false,
    msgError: null
});