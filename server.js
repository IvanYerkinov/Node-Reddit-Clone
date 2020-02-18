const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const mongod = require('./data/reddit-db');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

//Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);


//Listen

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
