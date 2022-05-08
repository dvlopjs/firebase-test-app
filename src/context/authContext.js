import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const context = createContext();
export const useAuth = () => {
  const authContext = useContext(context);
  return authContext;
};
export default function AuthProvider({ children }) {
  const [dataUser, setDataUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const userRegister = (auth, user, password) => createUserWithEmailAndPassword(auth, user, password);

  return (
    <context.Provider
      value={{
        userRegister,
        setIsLogged
      }}
    >
      {children}
    </context.Provider>
  );
}
