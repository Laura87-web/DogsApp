import "./detail.css"
import { useEffect } from "react"
import { getDetail } from "../../actions"
import { useParams } from "react-router"

import { useSelector , useDispatch } from 'react-redux';



export default  function Detail() {
  const params =useParams()
  const idDetail = params.id
  const info = useSelector((store)=>store.detail)
  const {weight, 
          name,
           origin,
           temperament,
            image,
            life_span,
            bred_for,
            breed_group,
          
          } = info
  const dispatch = useDispatch()
    
    useEffect(()=>{
      // console.log("ENTRO A USEEFECT")      
        dispatch(getDetail(idDetail))     
    },[])

    // console.log("infoooooooooo",info)
    const peso = weight?.metric
    const url = image?.url  
   return (
     <>
       <h1>{name} </h1>
     <div className="Detail">
       <div className="descripcion">
       <span>Temperamentos: </span><h3> {temperament}</h3>
         <h3><span>Origen: </span> {origin}</h3>
         <h3><span>Peso:</span> {peso}</h3>
         <h3><span>Años de vida:</span>{life_span}</h3>
         <h3><span>Criado para:</span> {bred_for}</h3>
         <h3><span>Grupo de Raza:</span>{breed_group}</h3>
       </div>
       <div className="img-detail">
         <img src={url} alt="imagen del perrito" />
       </div>
     </div>
     </>
   );
  }