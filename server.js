//requiring routes and node packages: express, dotenv, path, handlebars, express-session, sequelize
require('dotenv').config();
const express = require('express');
const routes = require('./controllers')
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//telling app to use express and setting up the port for localhost and heroku
const app = express();
const PORT = process.env.PORT || 3001;

//creating the session for a logged in user
const sess = {
    secret: process.env.DB_SECRET,
    cookie:{},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//tells the app to use express-sessions
app.use(session(sess));

//setting up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//allowing app to access the api routes
app.use(routes);

//turing on server and setting force: false for the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});