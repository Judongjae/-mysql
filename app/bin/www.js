"use strict";
//실행파일
const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("서버가동");
});
