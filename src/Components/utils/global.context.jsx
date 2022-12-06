import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



export const initialState = {
  themes: {
      light: {
          backgroundHome:"#ffffff",
          backgroundNavbar:"#828181",
          color:"#000000"
      },
      dark: {
          backgroundHome:"#191919",
          backgroundNavbar:"#000000",
          color:"#ffffff"
      }
  },
  favs:JSON.parse(localStorage.getItem("favs")||"[]")
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [odontologos, setOdontologos] = useState([])
  

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => setOdontologos(res.data))
  .catch(err => console.log(err))
  
   
  }, [])

  const [Theme, setTheme] = useState(initialState.themes.ligth)

  const handleThemeChange=()=>{
    if (Theme === initialState.themes.light) setTheme(initialState.themes.dark)
    if (Theme === initialState.themes.dark) setTheme(initialState.themes.light)
  }

  const [Favs ,setFavs] = useState(initialState.favs)

  return (
    <ContextGlobal.Provider value={{odontologos,setOdontologos,Theme, handleThemeChange, Favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  )

};

export default ContextProvider

export const useContextGlobal = ()=>{
  return useContext(ContextGlobal)
}