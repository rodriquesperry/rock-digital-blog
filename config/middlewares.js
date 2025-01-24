module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      origin: [
        "http://localhost:3000",
        "http://127.0.0.1:1337",
        "https://rockdigital.agency",
        "https://rockdigital-v2-3ynnuk96o-rodriques-projects.vercel.app'",
      ],
    },
  },
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
