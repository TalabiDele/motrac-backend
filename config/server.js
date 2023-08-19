module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: 1337,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
