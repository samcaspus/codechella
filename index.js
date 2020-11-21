
const express = require("express");
const mongoose = require("./config/mongoose");
const cors = require("cors");
const path = require("path");
const router = express.Router();
const app = express();
const port = 8000;


app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


const http = require('http').Server(app);
const io = require('socket.io')(http);



app.use("/", require("./router/"));
app.use("/engage/views", express.static(path.join(__dirname, "views")))

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
        console.log("user has been disconnected", socket.id);
    })

    socket.on("message", (data) => {
        io.emit("message", data);
        console.log(data);
    })
});

http.listen(port, (err) => {
    if (err) {
        console.log(`something went wrong while establishing connection with the port = ${port}`);
        return;
    }

    console.log(`connection establised successfully with port ${port}`);
})