module.exports = ({ env }) => ({
  host: env("HOST", "191.101.233.33"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
