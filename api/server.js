import express from "express";
import cors from "cors";
import router from "./router/index.js";
import fs from "fs";
import uplode from "./middelwer/uplode.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname1 = dirname(__filename);

app.use("/public", express.static(path.join(__dirname1, "/public/images")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use(express.static('public/images'))
app.use("/api/v1/", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("run port 3000");
});

// https://www.youtube.com/watch?v=c1xTDSIXit8&list=PLj-4DlPRT48mxPG8TAXOH4qqQ1ijuERO4
// https://www.youtube.com/watch?v=CDtPMR5y0QU
// https://www.youtube.com/watch?v=y66RgYMAgSo&list=PLj-4DlPRT48mxPG8TAXOH4qqQ1ijuERO4&index=3
// https://www.youtube.com/watch?v=rMiRZ1iRC0A&list=PLj-4DlPRT48nSySC5-TtF4Ve3fceLs9qs&index=4
// https://github.com/safak/youtube/tree/mern-ecommerce-app/api
// https://github.com/basir/mern-amazona
// https://github.com/bhaikaju/mega-back
// https://github.com/ipenywis/express-login-register-api/tree/master/src
// https://www.youtube.com/watch?v=sVYrH166LXM
// https://sebhastian.com/sequelize-update-example/
