//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| 0 0 |)
//                      $\  =  /$
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Raza, Temperamento } = require('./src/db.js');

// Sincronizar todos los modelos a la vez.
conn.sync({ force: false }).then(() => {

  // var raza1 = Raza.create({
  //   name: "Caanichito",
  //   altura: 0.2,
  //   peso: 2
  // });

  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
   
  });
})

