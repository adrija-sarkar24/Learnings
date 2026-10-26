const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});

const polls = {};

const polling = io.of("/polling");

polling.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    
    if (token === "Bearer demo-token") {
        console.log("Authenticated");
        
        socket.user = { role: "host" }; 
        next();
    } else {
        console.log("Token Required");
        next(new Error("Token Required"));
    }
});


polling.on('connection', (socket) => {
    console.log(`User Connected to /polling: ${socket.id}`);

    socket.on("poll:create", ({ question, options }, cb) => {
        if (socket.user.role !== "host") {
            return cb({ success: false, error: "Unauthorized" });
        }
        
        if (!question || !options || options.length < 2) {
            return cb({ success: false, error: "Invalid question or options" });
        }

        

        polling.emit("abc");
        cb({ success: true });
    });
});

httpServer.listen(3000, () => {
  console.log('Server running on port 3000');
});