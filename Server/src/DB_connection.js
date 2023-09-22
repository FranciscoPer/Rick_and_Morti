require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

require("./models/User")
 require("./models/Favorite")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   // URL
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
require("./models/User")(sequelize);
require("./models/Favorite")(sequelize);
//
sequelize.models.User.belongsToMany(sequelize.models.Favorite, {through:"user_favorite"});
sequelize.models.Favorite.belongsToMany(sequelize.models.User, {through:"user_favorite"});
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!



module.exports = {
   User: sequelize.models.User,
   Favorite: sequelize.models.Favorite,
   conn: sequelize,
};
