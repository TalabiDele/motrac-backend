const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } =
    "https://motrac-backend-production.up.railway.app/";

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      debug: false,
    },
  };
};
