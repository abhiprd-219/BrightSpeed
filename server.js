const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());
server.use(middlewares);

// Endpoint to handle user signup
server.post('/signup', (req, res) => {
    const newUser = req.body;
    router.db.get('users').push(newUser).write();
    res.json({ success: true, message: 'User successfully signed up' });
});

// Endpoint to check user login
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = router.db.get('users').find({ username, password }).value();

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

server.use('/api', router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
