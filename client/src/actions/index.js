const axios = require("axios");


export function getDogs() {
    return function (dispatch) {
        return axios.get("http://localhost:3001/dogs") //fetch "nativo de react"
            // .then(respuesta => respuesta.json())
            .then(respuesta => {
                dispatch({
                    type: "GET_DOGS",
                    payload: respuesta.data
                })
            })
    }
};
export function getTemperaments(){
    return function(dispatch){
        return axios.get("http://localhost:3001/temperament")
        .then(respuesta=>{
            dispatch({
                type: "GET_TEMPERAMENTS",
                payload: respuesta.data
            })
        })
    }
}
export function addDog(dog){
    // console.log("-------------DOG: ",dog)
    return function(dispatch){       
        return axios.post("http://localhost:3001/dog", dog)
        .then(respuesta=>{
            dispatch({
                type: "ADD_DOG",
                payload: respuesta
            })
        })
        
        
    }
}
export function getDetail(id) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/dogs/${id}`) //fetch "nativo de react"
            // .then(respuesta => respuesta.json())
            .then(respuesta => {
                dispatch({
                    type: "GET_DETAIL",
                    payload: respuesta.data
                })
            })
    }
    // return function (dispatch) {
    //     return axios.get(`http://localhost:3001/dogs/${id}`)
    //         .then(respuesta => {
               
    //             dispatch({
    //                 type: "GET_DETAIL",
    //                 payload: respuesta
    //             })
    //         })
    // }
}
export function buscar(unDog){
    // console.log("entro a action BUSCAR..")OK
    return {
        type: "BUSCAR",
        payload: unDog
    }
}
export function filtrar(porCualCondicion){
    return {
        type: "FILTRAR",
        payload: porCualCondicion
    }
}
export function ordenar(porCualParametro){
    return {
        type: "ORDENAR",
        payload: porCualParametro
    }
}
export function irAnterior(){
    return {
        type: "IR_ANTERIOR",
    
    }
}
export function irSiguiente(){
    return {
        type: "IR_SIGUIENTE",
    }
}
export function amapear(cuantos){
   
    return{
        type: "AMAPEAR",
        payload: cuantos
    }
}
  

