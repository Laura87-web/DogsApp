var router = require("express").Router();
const { Raza, Temperamento } = require('../db.js');


router.post("/dog", async function (req, res) {
    const { nameRaza, altura, peso, life, str, imagen } = req.body;
    console.log("REQ.BADY------", req.body)
    //Crear alerta si el cliente no carga todos los datos necesarios
    if (!nameRaza || !altura || !peso) {
        
        console.log("FALTAN PROPIEDADES")
        return res.send("Debes completar todos los campos..intenta otra vez :V ")
    }
   
    try {
       const [dog] = await Raza.findOrCreate({
            where: { name: nameRaza },
                defaults: {
                name: nameRaza,
                altura,
                peso,
                life_span: life,
                img:imagen
            }
        });
        if(str){//temp puede ser un array con varios strings SOLO TENGO UN STRING
            let arr = str.split(" ")
            console.log("arr xxx ",arr)
            arr.pop()
            console.log("arr pop ",arr)
            
           
            
            arr.map(async (elem)=>{
                console.log("elem", elem)
               const elTemp = await Temperamento.findOne({where:{name:elem}})
               console.log("elTemp: ------- ",elTemp)
               await dog.setTemperamentos(elTemp)
               
            })
            
           
            
        }

        return res.send(dog)
    } catch (error) {
        console.error(error)
        res.send("No se pudo agregar perro por error:x ")
    }
})


module.exports = router;