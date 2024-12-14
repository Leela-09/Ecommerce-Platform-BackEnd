// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// // Google OAuth Credentials
// const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
// const GOOGLE_CLIENT_SECRET = 'YOUR_GOOGLE_CLIENT_SECRET';

// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:5003/auth/google/callback', // Redirect after Google login
// },
// (accessToken, refreshToken, profile, done) => {
//   // Handle successful authentication (profile info)
//   return done(null, profile);
// }));

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });
