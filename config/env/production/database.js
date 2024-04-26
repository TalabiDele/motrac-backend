const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } =
    "postgresql://postgres:3CFbB2f6eFD1ae3FaDC-2eEbG5DFeDbC@:/railway";

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
