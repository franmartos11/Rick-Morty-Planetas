import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const initialState = {
  themes: {
      light: {
          backgroundHome:"#ffffff",
          backgroundNavbar:"#828181",
          backgroundFooter:"#828181",
          color:"#000000"
      },
      dark: {
          backgroundHome:"#191919",
          backgroundNavbar:"#000000",
          backgroundFooter:"#000000",
          color:"#ffffff"
      }
  },
  favs:JSON.parse(localStorage.getItem("favs")||"[]")
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [Odontologos, setOdontologos] = useState([])

  useEffect(() => {
      const fetchData = () => {
          axios('https://jsonplaceholder.typicode.com/users')
          .then(res => setOdontologos(res.data))
      }
      fetchData()
  }, [])
  
  const [Theme, setTheme] = useState(initialState.themes.light)
  const handleThemeChange= ()=>{
    if (Theme === initialState.themes.light) setTheme(initialState.themes.dark)
    if (Theme === initialState.themes.dark) setTheme(initialState.themes.light)
  }
  const [Favs ,setFavs] = useState(initialState.favs)
  
  return (
    <ContextGlobal.Provider value={{Odontologos, setOdontologos, Theme, handleThemeChange, Favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

