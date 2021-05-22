//La tarjeta recibe como propiedad de su padre
//imagen, nombre de raza y temperamento
import "./card.css";
import { Link } from 'react-router-dom';

export default function Card({ name, temperamento, imagen,id }) {
  return (
    <div className="Card">
      <Link to ={`/dogs/${id} `}> 
      <h2>{name}</h2> 
      </Link>
     
      <div className="tem">
        <h4> {temperamento}</h4>
        <img src={imagen} alt="imagen del perrito" />
      </div>
    </div>
  );
}
// <div className="cardBody">
//   <h2>{name}</h2>
//   <p>{temperamento}</p>
//   <div className="img-card">
//     <img src={imagen} alt="imagen del Perris" />
//   </div>
// </div>
