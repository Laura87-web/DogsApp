const initialState = {
    temperamentos: [],//se traen de la DB cuando el cliente ingrese a la Home -array de strings- no permitire que se agreguen mas temperamentos que los existentes, el cliente podra elegir uno o mas de cualquiera de estos temperamentos para ponerle a su nuevo perro
    razas: [],
    
    renderList: [],
    detail:[],
    
    pagina: 0,
    amapear:[],
    mensajeAdd:""
    
  }
  
  export default function Reducer (state = initialState, action)  {
  
          
    switch (action.type) {
      case 'GET_DOGS':
       // console.log("Estoy en get dogs...en reducer");ok
        return {
          ...state,
          razas: action.payload,
          renderList: action.payload
         
        } 
      case "GET_DETAIL":
       
        const info =action.payload
        return{
          ...state,
          detail: info
        }   
      case "GET_TEMPERAMENTS":
        // console.log("GET_TEMPERAMENTS",action.payload)
        // console.log("gruposR", action.payload.grupArr)
        // console.log("tempera-------", action.payload.charged)
        return {
          ...state,
          temperamentos: action.payload
          // grupoRaza: action.payload.grupArr
        }
      case 'ADD_DOG':
        return {
          ...state,
          mensajeAdd: action.payload //trae el msj de respuesta del POST
        }
      case "ORDENAR":
        let result = []
        if (action.payload === "alfaAsc") {

          result = state.renderList.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });

        }
        if (action.payload === "alfaDesc") {


          // result = state.renderList.sort((a, b) => b.name - a.name );

          result = state.renderList.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });

          // console.log("result------", result)

        }
        if (action.payload === "porPeso") {
          result = state.renderList.sort(function (a, b) {
            if (a.peso.metric < b.peso.metric) {
              return 1;
            }
            if (a.peso.metric > b.peso.metric) {
              return -1;
            }
            return 0;
          });
        }

        return {
          ...state,
          renderList: result,
          pagina: 0
        }
      case "BUSCAR":
        let arr = []
        state.razas.map(elem => {
          if (elem.name.toLowerCase().includes(action.payload.toLowerCase()))
            arr.push(elem)
          return arr
        }

        )
        return {
          ...state,
          renderList: arr,
          pagina: 0

        }
      case "FILTRAR":
        console.log("ENTRA A FILTRAR DE REDUCER CON VALOR PAYLOAD", action.payload)
        // console.log("payload",action.payload)
        let fil = []

        if (action.payload === "existentes") {
          console.log("ENTRA A IF DE WXISTENTE")
          state.razas.map(elem => {
            if (typeof elem.id === "number" ) fil.push(elem)
          })
        } else if (action.payload === "creadas") {
          console.log("ENTRA A IF DE CREADA")
          state.razas.map(elem => {
            if (elem.id.length > 4) fil.push(elem)
          })  //los id de la DB son largos
        } else {
          state.razas.map(elem => {
            if (elem.temp) {
              if (elem.temp.includes(action.payload)) {
                fil.push(elem)
              }
            }
            return fil
          })
          console.log("arrFIL", fil)
        }

        return {
          ...state,
          renderList: fil,
          pagina: 0
        }
        case "AMAPEAR":
         return{
            ...state,
            amapear: action.payload
          }  
        case "IR_ANTERIOR":
          if(state.pagina === 0) {
            var irAnterior = state.pagina;

          }else{irAnterior = state.pagina -1}
          return {
            ...state,
            pagina: irAnterior
          }
        case "IR_SIGUIENTE":
          console.log("pagina :", state.pagina)
          console.log("largo de renderList",state.renderList.length);
          if( state.amapear.length < 6 ){
            var irSiguiente = state.pagina

          } else { irSiguiente = state.pagina + 1}
          return {
            ...state,
            pagina: irSiguiente
          }

          
     default:
        console.log("SE FUE POR EL DEFAULT DEL REDUCER")
        return {...state}
    }
  }
  