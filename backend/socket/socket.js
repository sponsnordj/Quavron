/* ========================================
SOCKET.IO REALTIME ENGINE
======================================== */

const { Server } = require("socket.io");

let io;

/* ========================================
INIT SOCKET
======================================== */

const initSocket = (server) => {

io = new Server(server, {

cors: {

  origin: "*",

  methods: [

    "GET",

    "POST"

  ]

}

});

console.log("⚡ Socket.IO Initialized");

/* ========================================
CONNECTION
======================================== */

io.on("connection", (socket) => {

console.log(

  `🟢 User Connected: ${socket.id}`

);

/* ========================================
   JOIN ROOM
======================================== */

socket.on("join-room", (roomId) => {

  socket.join(roomId);

  console.log(

    `📁 ${socket.id} joined ${roomId}`

  );

  io.to(roomId).emit(

    "user-joined",

    {

      userId: socket.id,

      roomId

    }

  );

});

/* ========================================
   LEAVE ROOM
======================================== */

socket.on("leave-room", (roomId) => {

  socket.leave(roomId);

  io.to(roomId).emit(

    "user-left",

    {

      userId: socket.id,

      roomId

    }

  );

});

/* ========================================
   LIVE CODE UPDATE
======================================== */

socket.on("code-update", (data) => {

  socket.to(data.roomId).emit(

    "receive-code-update",

    data

  );

});

/* ========================================
   TERMINAL OUTPUT
======================================== */

socket.on("terminal-output", (data) => {

  io.to(data.roomId).emit(

    "receive-terminal-output",

    data

  );

});

/* ========================================
   AI MESSAGE
======================================== */

socket.on("ai-message", (data) => {

  io.to(data.roomId).emit(

    "receive-ai-message",

    data

  );

});

/* ========================================
   NOTIFICATIONS
======================================== */

socket.on("notification", (data) => {

  io.emit(

    "receive-notification",

    data

  );

});

/* ========================================
   DISCONNECT
======================================== */

socket.on("disconnect", () => {

  console.log(

    `🔴 User Disconnected: ${socket.id}`

  );

});

});

};

/* ========================================
GET SOCKET INSTANCE
======================================== */

const getIO = () => {

if (!io) {

throw new Error(

  "Socket.io not initialized"

);

}

return io;

};

/* ========================================
EXPORTS
======================================== */

module.exports = {

initSocket,

getIO

};
