const express = require('express');

let app = express();

const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes


// Server
app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
})