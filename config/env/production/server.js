module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: "https://rockdigital.agency",
  admin: {
    path: "/admin",
  },
});
