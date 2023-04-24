//ket noi CSDL

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("db_food","root","1234", {
    host: "localhost",
    port: "3306",
    dialect:"mysql"
});

module.exports = sequelize;


//test kết nối thành công không
// try{
//     sequelize.authenticate();
//     console.log("Connection has been established successfully.");
// } catch{
//     console.error("Unable to connect to the database.");
// }

//code first

// const Food = sequelize.define("food", {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     price: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// });