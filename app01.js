const express  = require("express");
const cookieParser=require("cookie-parser");

const cookieRouter = require("./src/routers/cookie/cookie_router");

const app = express();

app.set("views","./src/views");
app.set("view engine","ejs");
app.use(cookieParser()); 
app.use("/cookie",cookieRouter); // 미들웨어


app.listen(3000,()=>{console.log("3000 서버 구동");});
