import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {Favs,Theme} = useContext(ContextGlobal)
  return (
    <div  class ="favs" style={{background:Theme.backgroundHome, color:Theme.color}}>

      <h1>Dentists Favs</h1>

      <div className="card-grid" >
        {
          Favs.map(favcard=>{
            return <Card key={favcard.id} id={favcard.id} name={favcard.name} username={favcard.username}></Card>
          })
        }
      </div>

    </div>
  );
};

export default Favs;
