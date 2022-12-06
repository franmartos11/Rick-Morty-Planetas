import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    let flag = false
    let favorites = Favs
    favorites.forEach((fav)=>{
      if(fav.id===id){
        flag = true
        let index = favorites.indexOf(fav)
        favorites.slice(index,1)
      }
    })
    if (!flag){
      favorites.push({
        "name":name,
        "username":username,
        "id":id,
      })
      localStorage.setItem("favs",JSON.stringify(favorites))
    }
    setFavs(favorites)
  }
  const{Favs,setFavs}= useContext(ContextGlobal)

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>Nombre: {name}</h3>
        <h4>Username: {username}</h4>
        <p>Id: {id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
