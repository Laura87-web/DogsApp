//renderiza una lista de perros 
//Lo que debe renderizar le sera pasoado por props
//su componente Padre es Home
//Home realizara el fiiltrado que le sea pedido
//Home guardara el estado de paginacion solo pasara a List los perros a mostrar
// import { useState, useEffect } from "react";

import Card from "../Card/Card"
import "./list.css"

export default function List({elementos}) {
    
        
  return (
      <div className="Cards">
       {elementos.map((elem, key) => {
        // console.log("elem: -----",elem);
        return (
          <Card
          key={key}
            id={elem.id}
            name={elem.name}
            temperamento={elem.temp}
            imagen={elem.img}
            
          />
        );
      })}
      ;
    </div>
  );
}