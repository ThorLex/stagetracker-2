require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Routes = require('./routes/route')
const auth = require('./routes/account')

const http = require('http');
const socketIo = require('socket.io');
const cors= require('cors')

const app = express()

app.use(cors({
    origin: '*'
}));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('sendMessage', (message) => {
        io.emit('message', message); // Broadcast the message to all connected clients
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

const PORT =  5001;

server.listen(PORT, () => {
  console.log(`chat server running on port ${PORT}`);
});









// express app


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/route', Routes)
app.use('/api/user', auth)

 // create server



// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connecté a la base de donnees ')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('on ecoute sur le port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 