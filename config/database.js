// // const path = require("path");

// // module.exports = ({ env }) => ({
// //   connection: {
// //     client: "sqlite",
// //     connection: {
// //       filename: path.join(
// //         __dirname,
// //         "..",
// //         env("DATABASE_FILENAME", ".tmp/data.db")
// //       ),
// //     },
// //     useNullAsDefault: true,
// //   },
// // });

// const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } =
//     "postgresql://postgres:3CFbB2f6eFD1ae3FaDC-2eEbG5DFeDbC@roundhouse.proxy.rlwy.net:26838/railway";

//   // "postgresql://postgres:3CFbB2f6eFD1ae3FaDC-2eEbG5DFeDbC@roundhouse.proxy.rlwy.net:26838/railway"

//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host: env("PGHOST", "127.0.0.1"),
//         port: env.int("PGPORT", 5432),
//         database: env("PGDATABASE", "strapi"),
//         user: env("PGUSER", "strapi"),
//         password: env("PGPASSWORD", "password"),
//         ssl: env.bool(true),
//       },
//       pool: { min: 0 },
//       debug: false,
//     },
//   };
// };

// // module.exports = ({ env }) => ({
// //   connection: {
// //     client: "postgres",
// //     connection: {
// //       connectionString: env("DATABASE_PRIVATE_URL"),
// //     },
// //     pool: { min: 0 },
// //   },
// // });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
