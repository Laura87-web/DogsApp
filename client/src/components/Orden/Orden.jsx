import {  useDispatch } from 'react-redux';
import { ordenar } from "../../actions"


export function Orden() {
  const dispatch = useDispatch()

 function handleSubmit(e){
    e.preventDefault()
    console.log("e.target.sel.value-----------------",e.target.sel.value)
    dispatch(ordenar(e.target.sel.value))

 }


  return (
    <form onSubmit={handleSubmit}>
      <label>- Ordenar -</label>
      <select name="sel">
        <option value="porPeso">Por Peso</option>
        <option value="alfaAsc"> A..Z</option>
        <option value="alfaDesc">Z..A</option>
      </select>
        <button type="submit">aplicar</button>
    </form>
  );
}


