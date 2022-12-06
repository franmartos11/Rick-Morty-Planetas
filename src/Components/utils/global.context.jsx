import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=> setOdontologos(res.data))
    .catch(err=> console.log(err))
  },[])
  
  return (
    <ContextGlobal.Provider 
    value={{odontologos,setOdontologos}}

    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal= ()=>{
  return useContext(ContextGlobal)
}