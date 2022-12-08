import React from "react"
import { useContext } from "react"
import { ContextGlobal } from "./utils/global.context"
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {

  const { Theme } = useContext(ContextGlobal)
  const{Favs,setFavs}= useContext(ContextGlobal)

  const addFav = ()=>{

    let flag = true
    let favorites = Favs

    favorites.forEach(fav=>{
      if(fav.id === id){

        flag = false
        let index = favorites.indexOf(fav)
        favorites.splice(index,1)

      }
    })
    if (flag === true){
      favorites.push({
        "name":name,
        "username":username,
        "id":id,
      })
      localStorage.setItem("favs",JSON.stringify(favorites))
      
    }else{
      localStorage.setItem("favs",JSON.stringify(favorites))
      
    }
    setFavs(favorites)
  }
  
  return (
    <div className="card" style={{background:Theme.backgroundCard,}}>
        <img src="/images/doctor.jpg" alt="doctor" />
        <h2>Nombre: {name}</h2>
        <Link to={`detail/${id}`}><h3>Username: {username}</h3></Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
