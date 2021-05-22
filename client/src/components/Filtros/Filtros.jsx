

import { useSelector , useDispatch } from 'react-redux';
import { filtrar } from "../../actions"


export default function Filtros() {
  const dispatch = useDispatch();
  const temp = useSelector((store) => store.temperamentos);
  // const grup = useSelector((store)=> store.grupoRaza)
   
  function handleOnSubmit(e) {
      e.preventDefault()
      // console.log ("EEEEEEEEEE",e.target.temper.value)
      dispatch(filtrar(e.target.temper.value))
  }

  return (    
    <form onSubmit={handleOnSubmit}>     
      <label>Filtrar por temperamento</label>
      <select 
        name ="temper">
        {temp?.map((elem, index) => { //necesitaba el name dentro del select
          return <option key = {index} value={elem.name}>{elem.name}</option>;//necesitaba el value aca
        })}
      </select>
      <button type="submit">Aplicar</button>
     
    
    </form>
  );
}