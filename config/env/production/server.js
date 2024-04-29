module.exports = ({ env }) => ({
  // url: "https://motrac-backend-production.up.railway.app",
  url: env("RENDER_EXTERNAL_URL"),
});
