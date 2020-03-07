const express = require('express');

let app = express();

const PORT = 3000;

// Import routes
let login = require('./routes/login');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET ,POST ,PUT, OPTIONS, PUT ,DELETE');
    res.header('Allow', 'GET ,POST ,PUT, OPTIONS, PUT ,DELETE');
    next();
});

// Routes
app.use('/api/v1', login);

// Server
app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
})