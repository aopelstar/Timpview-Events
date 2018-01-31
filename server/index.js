const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const wController = require('./controllers/wed_controller');
const corpController = require('./controllers/corp_controller');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

const checkForSession = require('./middleware/checkForSession');

const app = express();
app.use( bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}))
app.use( checkForSession );


//authentication
app.use(passport.initialize() );
app.use(passport.session() );

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    
    let { user_id } = profile;  
    const db = app.get('db')

    db.wedding.find_wevent([user_id]).then(function(users) {
        if (!users[0]){
            db.wedding.create_wevent(
                [user_id]
            ).then( user => {
                return done(null, user[0].auth_id)
            })
        } else {
            done(null, users[0].auth_id)
        }
    })
}))

passport.serializeUser((id, done) => { 
    console.log(":(:(:(:(:(:(:(:(:(:(:(::):):):):)",id)
    return done(null, id);
})

passport.deserializeUser((id, done) => { 
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", id) 
   app.get('db').wedding.find_wevent([id])
   .then(function(user) {
    return done(null, user[0])
   })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3031/#/event/',
    failureRedirect: 'http://www.oprah.com'
}));

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user)
    }
})

app.get('/auth/logout', function( req, res ) {
    req.logOut();
    res.redirect('http://localhost:3031/#/home')
})


//wedding endpoints
app.post( '/api/wedding', wController.create );
app.get( '/api/wedding', wController.getEvent );
app.put( '/api/wedding', wController.update );
app.delete( '/api/wedding/:id', wController.delete );

//corporate endpoints
app.post( '/api/corp', corpController.create );
app.get( '/api/corp/:id', corpController.getEvent );
app.put( '/api/corp/:id', corpController.update );
app.delete( '/api/corp/:id', corpController.delete );


//music endpoints
app.get('/api/music', wController.getMusic )
app.post('/api/playlist', wController.createPlaylist) 
app.get('/api/playlist', wController.getPlaylist)



const port = process.env.SERVER_PORT || 3030
app.listen( port, () => { console.log(`Everything is just really sexy on on port ${port}'`)}) 