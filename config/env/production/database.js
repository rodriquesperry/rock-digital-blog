const fs = require("fs");
const path = require("path");

const caCertificateBase64 = process.env.CA_CERT_BASE64;

const caCertificatPath = path.resolve(__dirname, './ssl/ca-certificate.crt');

if (caCertificateBase64) {
  fs.mkdirSync(path.dirname(caCertificatPath), { recursive: true });
  fs.writeFileSync(caCertificatPath, Buffer.from(caCertificateBase64, 'base64'));
  console.log(`CA certificate written to ${caCertificatePath}`);
} else {
  console.error('CA_CERT_BASE64 environment variable is not set.');
}

module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        connectTimeout: 10000,
        ssl: {
          ca: fs.readFileSync(caCertificatePath, 'utf8'),
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", true), // Use true for secure connections
        },
      },
      debug: true,
    },
  };
};
