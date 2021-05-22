var router = require('express').Router();
const axios = require("axios")
const { Raza } = require('../db.js');



router.get('/:id', async function(req, res) {
    //*recibe un id y trae el detalle asociado
    const razaId = req.params.id;
   try {
    if(razaId.length > 5){
        console.log("razaID----",razaId)
        //buscar el Id en la DB
        const pedido = await Raza.findOne({were: {id : razaId}})
        return res.send(pedido)
    }
   
    //traer todas las razas de la api
    const result = await axios.get( `https://api.thedogapi.com/v1/breeds`)
    //buscar en result la raza que coincida con el id colocado en params
     const dataNeeded = result.data.find(elem => elem.id === Number(razaId))
    //  console.log("esto es dataNeeded: ",dataNeeded);
     return res.json(dataNeeded)
  
    } catch (error) {
        console.log("ESTE ES EL ERROR",error)
       return res.send("OCURRIO UN ERROR")
   }
    
   
        
})

module.exports = router;