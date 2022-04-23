import React, { createContext, useContext, useState } from "react";

export const context = createContext();
export const useAuth = () => {
  const authContext = useContext(context)
  return authContext
}
export default function AuthProvider({children}) {
  const [dataUser, setDataUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <context.Provider
      value={{
        dataUser,
        isLogged,
      }}
    >
      {children}
    </context.Provider>
  );
}
