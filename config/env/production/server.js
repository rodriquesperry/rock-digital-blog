module.exports = ({ env }) => ({
  url: env("APP_URL", "https://your-app-domain.com"), // Public URL of your app
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["your-app-key-1", "your-app-key-2"]),
  },
});
