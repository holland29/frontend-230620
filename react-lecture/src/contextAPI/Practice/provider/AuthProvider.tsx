import React, { useReducer } from "react";
import AuthContext from "../context/AuthContext";

const reducer = (state: boolean, action: string) => {
    switch (action) {
        case 'login':
            return true;
        case 'logout':
            return false;
        default:
            return state;
    }
};

export default function AuthProvider({ children }: {children : React.ReactNode}) {

    const [isLoggedIn, dispatch] = useReducer(reducer, false);
  return (
    <AuthContext.Provider
        value={{
            isLoggedIn,
            logIn: () => dispatch('login'),
            logOut: () => dispatch('logout'),
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}
