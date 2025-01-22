module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        ca: fs.readFileSync(
          "/Volumes/Rods Hard Drive/Rock Digital/ca-certificate.crt",
        ),
      },
    },
  },
});
