const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const projectController = require('./controllers/projectController.js');
const userController = require('./controllers/user-controller.js');
const db = require('./database');
const authController = require('./controllers/google-auth-controller');

// const db = require('./database');
// Example query to show database is connected
// db.any(`SELECT * FROM nodes`).then(data => console.log(data));

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));


// Routes dealing with user creation/verification
app.post('/signup', userController.createUser);
app.post('/login', userController.logInUser);
app.get('/homepage', userController.verifyUser); // Todo : change 
app.get('/logout', userController.logOutUser);

// Routes dealing with project information
app.get('/projects/:projectid', projectController.retrieveProject);
app.get('/getallprojects', projectController.getAllProjects);

app.get('/google-init', authController.getCode);

app.get('/homepage', authController.getToken)

app.post('/newproject', projectController.newProject);
app.post('/updateproject/:projectid', projectController.updateProject);
app.post('/newnode/:projectid', projectController.newNode);

// Catch-all for React router
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './../index.html')));


app.listen(3000, () => console.log('Listening on port 3000...'));
