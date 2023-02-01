// require('./config/config');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('cookie-session');
const { PORT, SERVER_SESSION_SECRET } = require('./config/config')
app.use(cors());
app.use(session({ secret: SERVER_SESSION_SECRET, maxAge:24*60*60*1000}));
const auth_routes = require('./routes/auth');
const hubs_routes = require('./routes/hubs');
console.log("!!!!!!!!!!!!!!!")
auth_routes(app);
hubs_routes(app);
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
