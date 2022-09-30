var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require("passport");
const { UserModel } = require('../models/user.model');

require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: "http://localhost:8080/user/auth/google/callback",
  },
  async function(accessToken, refreshToken, profile, done) {
    let email= profile._json.email;
    var newUser;
    const User= await UserModel.findOne({email});
    if(!User){
    const newuser= new UserModel({email})
    await newuser.save();
    newUser= newuser
    }
    return done(null,newUser)
  }
));

module.exports= passport;