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
const path = require("path");

//handdling cors error


const _dirname = path.resolve();


const corsOption = {
    origin: 'https://mithun-portfolio.onrender.com',
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

app.use(express.static(path.join(_dirname, "/client/dist")));
app.get('*', (_, res) =>{
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

app.use(errorMiddleware);

connectDatabase().then(() =>{
const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server Runinig on ${port}`);
    });
});
