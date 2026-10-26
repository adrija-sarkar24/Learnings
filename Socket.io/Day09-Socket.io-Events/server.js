const app = require("./src/app");
const {createServer} = require("http");/*ask*/
const { Server } = require("socket.io");/*ask*/

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    console.log("New Connection Created");
    console.log("Socket ID: ", socket.id)

    socket.on("message", (msg)=>{
        console.log("Message Received From: ", socket.id);
        console.log("Message", msg);

        io.emit("newMessage", msg);

        socket.broadcast.emit("notification", {
            message: "New Message Received",
            sender: socket.id
        });
    });

    socket.on("typing", (username) => {
        console.log(username + ' is typing...')

        socket.broadcast.emit("typing", username + " is typing...")
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected: ", socket.id)
    });

})

httpServer.listen(3000, () => {
  console.log('Server running on 3000');
});

