const axios = require("axios");//lo importo asi automaticamente al escribir axios

var router = require("express").Router()
const { Raza, Temperamento } = require("../db");
// const { conn } = require('../db.js');



router.get('/', async function(req, res) {
    try {
        //la tabla temperamento tiene algo?
        let check = await Temperamento.count()
        if (check) {
            const pedido = await Temperamento.findAll()
            res.send(pedido)
        } else {
            //trae los temperamentos de la api
            const result = await axios.get(`https://api.thedogapi.com/v1/breeds`)
            let temp = [];
            // let grupArr =[];
            //-----------------------------------------------------
           result.data.map(elem => {
                let str = elem.temperament //a veces estaba undefined y guardaba eso
                // let razaGroup = elem.breed_group
                //------------------
                if (str) {
                    let arr = str.replace(/,/g, "").split(" ")
                    arr.forEach(element => {
                        let condition = temp.find(elem => elem.name === element)
                        if (!condition) {
                            temp.push({ name: element })
                        }
                    });
                }
                //----------------
                // if(razaGroup){
                //     // console.log("esto es GRUP-----", razaGroup)
                //     let condition = grupArr.find(elem => elem === razaGroup)
                //         if (!condition) {
                //             grupArr.push(razaGroup)
                //         }
                // }

            })
            let charged = await Temperamento.bulkCreate(temp) //carga el array de objetos en la tabla temperamentos               
            return res.json({charged})//responde con lo que tiene cargado la tabla de temperamentos y mi array de grupo de razas
        }
    } catch (error) {
        console.error(error, "NO SE PUDO CHE.. A VER QUE PACHO")
    }

})






// router.get("/", async function(req, res){
//     try {
//         // if(false){
//         //     //traerme los temperamentos de la DB
//         // }else{
//             //pedir TODOS los temperamentos a la api y guardar en DB
//             let temperaments = []
//             const result = await axios.get(`https://api.thedogapi.com/v1/breeds`)
//             console.log("-------------------------------------------".result.data);
                        
//             // const resultTemp = result.data.map(elem =>{
//             //     return elem.temperaments    
//             // })
                    
//             // console.log("TEMPERAMENTOS: ",temperaments)
            

//             res.send(result.data)
//         // }
//     } catch (error) {
//         res.send("OCURRIO ERROR, FUE POR EL CATCH")
//     }

// })

module.exports = router;