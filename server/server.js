// require('./config/config');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('cookie-session');
const { PORT, SERVER_SESSION_SECRET } = require('./config/config')
app.use(cors());
app.use(session({ secret: SERVER_SESSION_SECRET, maxAge:24*60*60*1000}));
app.use(require('./routes/auth'));
app.use(require('./routes/hubs'));
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
