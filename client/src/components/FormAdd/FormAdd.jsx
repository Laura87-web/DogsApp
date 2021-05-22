import "./formAdd.css"
import { useSelector } from "react-redux"
import  { useState } from 'react';
import {addDog} from "../../actions"
import { useDispatch } from 'react-redux';
//-------------------------------------------


export default function FormAdd() {
   const temp = useSelector((store) => store.temperamentos);
   const msjAdd = useSelector((store)=> store.mensajeAdd)
   const [inputs, setInputs] = useState({})
   const dispatch = useDispatch()
       
//---Handlers---------------
  function handlerChange(e){
    setInputs({
      ...inputs,
        [e.target.name]: e.target.value 
    })      
  }
    
  function handlerSubmit(e){
    e.preventDefault()
      
    let peso = (Number(inputs.pesoMin) + Number(inputs.pesoMax)) / 2;
    let str = "";
       for (const key in inputs) {
         temp.forEach((elem) => {
           if (elem.name === key) {
             str += `${key} `;
           }
         });
       }
       setInputs({
         ...inputs,
         peso,
         str,
      })
    // console.log("STR:  ",str)   
    dispatch(addDog(inputs))
    // console.log("msjAdd: ",msjAdd)
      
    if(msjAdd.data){
        alert("se agrego el perrito correctamente a la DB")
    }
     
  }
//------Render---------------------------
  return (
    <>
    <h1>Agrega una Raza Personalizada</h1>
    <form className="form-addDog" onSubmit={handlerSubmit}>
     
      <input
        name="nameRaza"
        type="text"
        onChange={handlerChange}
        value={inputs.name}
        placeholder="Nombre"
        required
      />
     
      <input
        name="altura"
        type="text"
        onChange={handlerChange}
        value={inputs.altura}
        placeholder="Altura"
        required
      />
      
      <input
        name="pesoMin"
        type="text"
        onChange={handlerChange}
        value={inputs.pesoMin}
        placeholder="Peso Minimo"
        required
      />
     
      <input
        name="pesoMax"
        type="float"
        onChange={handlerChange}
        value={inputs.pesoMax}
        placeholder="Peso Maximo"
        required
      />
     
      <input
        name="life"
        type="text"
        onChange={handlerChange}
        value={inputs.life}
        placeholder="Años de vida"
      />
     
      <input 
        name= "imagen"
        onChange={handlerChange}
        value={inputs.imagen}
        type="text"
        placeholder="Url de imagen"/> <br/>
        
      <span>Elige los temperamentos</span>  
     <div clasname="temperamentos"> 
        {temp.map((elem, key) => {
          return (
            <label key={key}>
              {elem.name}
              <input
                className="input-checkbox"
                key={key}
                type="checkbox"
                name={elem.name}
                onChange={handlerChange}
              />
            </label>
          );
        })}
      </div>
      <button className="btn-form" type="submit">
        Agregar Perrito
      </button>
    </form>
    </>
  );
    
};

// // Altura 
// // Peso (Diferenciar entre peso mínimo y máximo)
// // Años de vida
// //  Posibilidad de seleccionar/agregar uno o más temperamentos
// //  Botón/Opción para crear una nueva raza de perro
