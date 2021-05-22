const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require("./dogs")
const home = require("./home")
const detail = require("./detail")
const temperament = require("./temperament")
const newDog = require("./dog")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/home", home);
router.use("/dogs", dogs, detail);
router.use("/temperament", temperament)
router.use("/", newDog)



module.exports = router;
