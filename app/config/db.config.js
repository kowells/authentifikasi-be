module.exports = {
  HOST: "34.142.180.156",
  USER: "root",
  PASSWORD: "12345",
  DB: "authentifikasidb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
