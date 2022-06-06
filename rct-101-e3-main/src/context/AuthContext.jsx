import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth,setIsAuth] = useState(false)


    const ToggleAuth = ()=>{
      setIsAuth(true)
    }

  return <AuthContext.Provider value={[isAuth,setIsAuth,ToggleAuth]}>
    {children}
    </AuthContext.Provider>;
};
