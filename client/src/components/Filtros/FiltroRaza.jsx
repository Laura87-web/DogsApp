import { useSelector , useDispatch } from 'react-redux';
import { filtrar } from "../../actions"


export default function FiltroRaza() {
    const dispatch = useDispatch();

    function handleOnSubmit(e) {
        e.preventDefault()
        // console.log ("EEEEEEEEEE",e.target.temper.value)
        dispatch(filtrar(e.target.grupoRaza.value))
    }
    return (
      <form onSubmit={handleOnSubmit}>
        <label>Filtrar Raza</label>
        <select name="grupoRaza">
          <option value="existentes">Existentes</option>
          <option value="creadas">Creadas</option>

          {/* {grup?.map((elem, index) => { //necesitaba el name dentro del select
        // {console.log("----------------------------elemm",elem)}
          return <option key = {index} value={elem}>{elem}</option>;//necesitaba el value aca
        })} */}
        </select>
        <button type="submit">Aplicar</button>
      </form>
    );
}  