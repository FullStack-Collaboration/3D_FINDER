const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Hello there' }));

//DEFINE ROUTES

app.use('/api/users', require('./app_routes/users'));
app.use('/api/auth', require('./app_routes/auth'));
app.use('/api/listings', require('./app_routes/listings'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
