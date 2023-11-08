import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children })=>{

    const [productList,setProductList]= useState([]);
    const [isLoading,setIsLoading]=useState(true);



    useEffect(()=>{
        axios.get("src/Productos/Productos.json").then((res)=> {
            setProductList(res.data);
            setIsLoading(false)
        })
    },[])

    if (!isLoading) {
        // Renderizar un componente de carga o un mensaje de espera mientras se cargan los datos
        return <div>Cargando...</div>;
      }
    
    return(
        <DataContext.Provider value={{productList}}>{children}</DataContext.Provider>
    )
};
export default DataProvider;


