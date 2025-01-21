const jsonServer = require('json-server');
const path = require('path');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Enable CORS for all responses
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

const SECRET_KEY = 'your_secret_key';
const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Check if the user exists in the database
function isAuthenticated({ username, password }) {
    return router.db.get('users').find({ username, password }).value();
}

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = isAuthenticated({ username, password });

    if (user) {
        const token = createToken({ username, userId: user.id });
        res.status(200).json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});