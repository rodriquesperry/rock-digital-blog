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
        "http://localhost:3000", // Frontend running locally
        "http://localhost:3001", // Alternative local frontend
        "http://127.0.0.1:1337", // Local Strapi instance
        "https://rockdigital.agency", // Your live site
        "https://www.rockdigital.agency", // Live site
        "https://rockdigital-v2-3ynnuk96o-rodriques-projects.vercel.app", // Vercel frontend
        "*", // Allow any origin (use cautiously, only for development)
      ],
    },
  },
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // Modify form body
      jsonLimit: "256mb", // Modify JSON body
      textLimit: "256mb", // Modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // Multipart data, modify here the limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
