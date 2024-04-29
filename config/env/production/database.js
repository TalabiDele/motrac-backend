const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } =
    "postgresql://postgres:3CFbB2f6eFD1ae3FaDC-2eEbG5DFeDbC@roundhouse.proxy.rlwy.net:26838/railway";

  // "postgresql://postgres:3CFbB2f6eFD1ae3FaDC-2eEbG5DFeDbC@roundhouse.proxy.rlwy.net:26838/railway"

  console.log(host, port, database, user, password);

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("PGHOST", "127.0.0.1"),
        port: env.int("PGPORT", 5432),
        database: env("PGDATABASE", "strapi"),
        user: env("PGUSER", "strapi"),
        password: env("PGPASSWORD", "password"),
        ssl: env.bool(true),
      },
      pool: { min: 0 },
      // connection: {
      //   host,
      //   port,
      //   database,
      //   user,
      //   password,
      // },
      debug: false,
    },
  };
};

// module.exports = ({ env }) => ({
//   connection: {
//     connection: {
//       connectionString: env("DATABASE_URL"),
//     },
//   },
// });
