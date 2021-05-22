var router = require('express').Router();
var axios = require("axios");
require("dotenv").config() //para importar .env
const {API_KEY} = process.env;
const { Raza, Temperamento } = require('../db.js');
const { Sequelize } = require('sequelize');


router.get('/', async function(req, res) {
    const name = req.query.name;
        try {
            if(name){
                
                //*Mostrar perritos que tengan el nombre pasado por QUERY
                const result = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`) 
                const dataNeeded = result.data //es un array con TODOS los perros que coinciden..
                
                //sumar los perritos de la DB
                console.log("---------buscando en BD---")
                const dogies = await Raza.findAll({ where: { name: name } })
                
                //trae lod dogs de la DB y de la API
                const total = [...dataNeeded , dogies]
                return res.send(total); 
            }else{
                 //pedir a la api la informacion
                const result = await axios.get(`https://api.thedogapi.com/v1/breeds`)//no me pidio la Key -_- why?
                // console.log("TRAE---", result.data)                
                const dataNeeded = result.data.map(elem =>{
                    // *imagen, nombre, temperamento
                    let obj = {
                        name : elem.name,
                        img  : elem.image.url,
                        temp : elem.temperament,
                        peso : elem.weight,
                        id  :  elem.id //para pedir el detalle
                    }
                   
                    return obj
                })
                const dogies = await Raza.findAll({include:[{model: Temperamento,
                    attributes: ["name"]
                }]})
                let dataDogsDB =[]
                for(let elem of dogies){
                    let str = ""
                     let arrTemp = elem.temperamentos
                     for(let elem of arrTemp){
                        str = str + elem.name + ", ";
                     }
                    let obj = {
                        name : elem.name,
                        img  : elem.imag,
                        temp : str,
                        peso : elem.peso,
                        id  :  elem.id //para pedir el detalle
                    }
                    dataDogsDB.push(obj)                }
              
                // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx",dataDogsDB)                
                const total = [...dataNeeded , ...dataDogsDB]
               return res.json(total)
            }
        } catch (error) {
            console.error(error, "Error catch")
        }

   
})


module.exports = router;


