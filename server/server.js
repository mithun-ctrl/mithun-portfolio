require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
const connectDatabase = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const achievementRoute = require("./router/achievement-router");
const cors = require("cors");
const adminRoute = require("./router/admin-router");

//handdling cors error

const corsOption = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, HEAD, PATCH",
    credentials: true,
};

app.use(cors(corsOption));


//Middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", achievementRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

connectDatabase().then(() =>{
const PORT = 5000;
    app.listen(5000, () => {
        console.log(`Server Runinig on ${PORT}`);
    });
});