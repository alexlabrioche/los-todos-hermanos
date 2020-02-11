const { Sequelize } = require('sequelize');

const dbConfig = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, { dialect: 'postgres' });

// async function test() {
//   try {
//     await db.authenticate();
//     console.log('Pouet trololol ca marche :)');
//   } catch (error) {
//     console.log('Unable to connect to DB: ', error);
//   }
// }
// test();

module.exports = db;
