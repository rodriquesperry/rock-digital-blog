module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env("DATABASE_HOST", "rockdigital.agency"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "rock_digital"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "R@cky410!!"),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // Use true for secure connections
      },
    },
    debug: false,
  },
});
