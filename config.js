require('dotenv').config({
  path: `${__dirname}/.env`,
});

module.exports = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: 'mysql',
  },
};
