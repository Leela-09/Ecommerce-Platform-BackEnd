// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const APIRouter = require('./routes/ApiRouter');  // Correct import for API routes
// const cors = require('cors');
// const { dbAfter, dbBefore } = require('./routes/debugger');  // Assuming debugger functions are correctly defined

// const app = express();
// const PORT = process.env.PORT || 5003;  // Use environment variable for port or default to 5003

// // Middleware
// app.use(cors());  // Enable CORS policy
// app.use(morgan('tiny'));  // Logging middleware
// app.use(express.json());  // Middleware to parse JSON bodies
// app.use(express.urlencoded({ extended: false }));  // Middleware to parse URL-encoded bodies

// // Use API routes
// app.use('/', APIRouter);  // Prefix API routes with '/api' for better structure


// // Database connection before starting the server
// dbBefore('Connecting to db');

// // Set the strictQuery option to true or false
// mongoose.set('strictQuery', false);  // Or you can use `true` if needed

// const MONGODB_URI = 'mongodb+srv://Leelavathy922003:Leela922003@cluster0.1jfqc.mongodb.net/Leela';

// // Connect to MongoDB and start the server if successful
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         dbAfter('DB connected successfully');
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Unable to connect with DB:', error);
//     });


const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const APIRouter = require('./routes/ApiRouter');  // Correct import for API routes
const cors = require('cors');
const { dbAfter, dbBefore } = require('./routes/debugger');  // Assuming debugger functions are correctly defined

const app = express();
const PORT = process.env.PORT || 5004;  // Use environment variable for port or default to 5003

// Middleware
app.use(cors());  // Enable CORS policy
app.use(morgan('tiny'));  // Logging middleware
app.use(express.json());  // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));  // Middleware to parse URL-encoded bodies

// Use API routes
app.use('/', APIRouter);  // Prefix API routes with '/api' for better structure

// Database connection before starting the server
dbBefore('Connecting to db');

// Set the strictQuery option to true or false
mongoose.set('strictQuery', false);  // Or you can use `true` if needed

const MONGODB_URI = 'mongodb+srv://Leelavathy922003:Leela922003@cluster0.1jfqc.mongodb.net/Leela';

// Connect to MongoDB and start the server if successful
mongoose.connect(MONGODB_URI)
    .then(() => {
        dbAfter('DB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect with DB:', error);
    });

