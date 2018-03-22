const mysql = require("mysql2");
const Sequelize = require("sequelize");
// import mysql from "mysql2";
// import Sequelize from "sequelize";

/*----------------BELOW IS REFERING TO DB HOSTED ON AWS-------------------*/
// const database = new Sequelize("chompyremote", "root", "chompydatabase", {
//   host: "chompy-test-database.cr8yw4uwndba.us-west-1.rds.amazonaws.com",
//   dialect: "mysql",
// });

/*---------------BELOW IS REFERING TO DB HOSTED LOCALLY-------------------*/
const database = new Sequelize("mapimages", "root", "", {
  host: "18.219.233.108",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

database
  .authenticate()
  .then(() => {
    console.log("success");
  })
  .catch(err => {
    console.error("err");
  });

module.exports = database;
