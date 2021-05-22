
//Home necesita guardar un estado
//Guarda los dogs que deben renderizarse en la lista, ese es su estado
//guarda un estado de pagina actual, que puede cambiar a anterior y siguiente
import "./home.css"
import Buscador from "../Buscador/Buscador"
import List from "../List/List"
import Filtros from "../Filtros/Filtros";
import { Orden } from "../Orden/Orden";
import { Link } from 'react-router-dom';
import { getDogs, getTemperaments, irAnterior, irSiguiente, amapear } from "../../actions"
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from "react";
import FiltroRaza from "../Filtros/FiltroRaza";

//------------------------------------

export default function Home() {

  const dispatch = useDispatch()
  
  const razas = useSelector((store)=> store.razas )
  const temperamentos = useSelector((store)=>store.temperamentos)
  const pagina = useSelector((store)=> store.pagina)
  const renderList = useSelector(state=>state.renderList)    
  
  useEffect(()=>{
    if (!razas.length) dispatch(getDogs())
    if(!temperamentos.length) dispatch(getTemperaments())
  }, [razas, temperamentos] )
  
  const segmento = pagina * 6 
  const elementos = renderList.slice(segmento, segmento + 6)
  dispatch(amapear(elementos));
      
  function handlerOnClick(e) {
    if( e.target.value === "anterior" )  dispatch(irAnterior());
    if( e.target.value === "siguiente" ) dispatch(irSiguiente());
  }
//--------------------------------------> 
    return (
      <div className="home">
        <h1>¿Cual Es Tu Firulais?</h1>
        <Link to="/dog">
          <button>Agrega una Nueva Raza!</button>
        </Link>
        <Buscador />
        <div className="filtros">
          <Filtros />
          <FiltroRaza/>
          <Orden />
        </div>
        <List elementos={elementos} />
        <button value="anterior" onClick={handlerOnClick}>
          Anterior
        </button>
        <button value="siguiente" onClick={handlerOnClick}>
          Siguiente
        </button>
      </div>
    );
    
  };