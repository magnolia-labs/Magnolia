const db = require('../database');

const userController = {};

userController.createUser = (req, res) => {
  // Perform Google Oauth with Axios
  // Get user email from res.locals?
  res.cookie('verified', 'true', { expires: new Date(Date.now() + 900000) });
  const { googleEmail } = res.locals;

  db.one(`INSERT INTO users(email)
          VALUES($1) RETURNING id`, googleEmail)
    .then((data) => {
      console.log('Successful user creation - your id is: ', data.id);
      return res.json(data.id);
      // Send user to homepage (how? res.sendFile(path.join(__dirname, './../index.html')) ?)
    });
};

userController.logInUser = (req, res) => {
  if (username === 'hi' && password === 'bye') {
    res.cookie('verified', 'true', { expires: new Date(Date.now() + 900000) });
    res.redirect('/homepage'); // Todo: change homepage to something unique
  }
};

userController.verifyUser = (req, res) => {
  if (req.cookies.verified) {
    console.log('User verified');
    return res.send('Verified, redirecting to homepage');
    // Send user to homepage (how? res.redirect('/homepage') ?)
  }
  return res.redirect('/google-init');
};

userController.logOutUser = (req, res) => {
  res.clearCookie('verified');
  res.redirect('/');
};

module.exports = userController;
