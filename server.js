// const express = require('express');
// const app = express();
// const path = require('path');
// const db = require('./models');
// const user = require('./route/user');
// const post = require('./route/post');
// const login = require('./route/login');

<<<<<<< HEAD
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use('/users', user);
// app.use('/posts', post);
// app.use('/login', login);


// app.use('/static', express.static(path.join(__dirname, 'public')));
=======
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const exphbs = require('express-handlebars');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());
>>>>>>> 0400db21861c872a09037f513f5911bb596555fb

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// //Syncs up our Sequelize models with MySQL.
// (async () => {
//     await db.sequelize.sync();
// })();

// app.use((req, res, next) => {
//     console.log(new Date().toLocaleDateString());
//     next();
// })

// app.get('/', [
//     (req, res, next) => {
//         res.send('This is the home page!')
//     }
// ]);

// app.use(function(request, response, next) {
//     console.log('Welcome!');
//     next();
// });

// app.listen(1234);

const express = require('express')
const { request } = require('http')
const app = express()
app.use(express.json());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/ho', (req, res) => {
    const test = {
        name : "My recipe",
        id : "Test-123",
        ingredients : 20,
    }
    res.send(test);
  })

  app.post('/create-user', (req, res) => {
    console.log(req.body)
    res.sendStatus(404)
  })