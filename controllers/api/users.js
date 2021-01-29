const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  update,
};

async function update(req, res) {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true});
  const token = createJWT(user);
  res.status(200).json(token);
}

//for TESTING purposes only
function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    //add the user to the db
    const user = await User.create(req.body);
    //token will be a string
    const token = createJWT(user);
    // we can use res.json to send back just a string
    // the client code take this into consideration
    res.json(token);
  } catch (err) {
    //client will check for non-2xx status code
    //400 = bad request
    res.status(400).json(err);
  }
}

//helper functions

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) throw new Error();
    await bcrypt.compare(req.body.password, user.password);
    const token = createJWT(user);
    res.json(token)
  } catch {
    res.status(400).json('Bad Credentials');
  }
}