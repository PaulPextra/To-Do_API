const express = require('express');
const todoRoutes = require('./src/todo/routes');
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());

// Defining  Root Route
app.get("/", (req, res) => {
    res.send("A Simple TODO API");
});

// Defining Todo API Route
app.use('/api/v1/todos', todoRoutes);

app.listen(port, () => console.log(`Listening on port ${port}...`));