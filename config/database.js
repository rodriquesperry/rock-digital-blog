const fs = require("fs");
const path = require("path");

const caCertificateBase64 = process.env.CA_CERT_BASE64;

const caCertificatePath = path.resolve(__dirname, './ssl/ca-certificate.crt');

if (caCertificateBase64) {
  fs.mkdirSync(path.dirname(caCertificatePath), { recursive: true });
  fs.writeFileSync(caCertificatePath, Buffer.from(caCertificateBase64, 'base64'));
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
        },
      },
    },
  };
};
