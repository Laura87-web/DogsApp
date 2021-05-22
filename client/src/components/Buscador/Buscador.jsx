import "./buscador.css"
import React, { useState } from 'react';
import {buscar} from "../../actions"
import { useDispatch } from 'react-redux';

export default function Buscador() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
       
    function handlerChange(e){
       setValue(e.target.value) 
      //  console.log("imput cambiando",e.target.value)ok
    }
    function handlerSubmit(e){
       //al hacer submit debe acceder al array de razas y filtrarlo segun la busqueda,
       //ese filtro es el que debe renderizar List
       e.preventDefault()
       dispatch(buscar(value))
      //  console.log("value......submit  ", value)ok
    }

    
    return (
      <div className="buscador">
          <form className="form-buscador"
            onSubmit={handlerSubmit}>
            <input 
              type="search"
              onChange={handlerChange}
              value = {value}                
            />
            <button type="submit">Buscar</button>
          </form>
      </div>
    )
    
  };