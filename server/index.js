const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const wController = require('./controllers/wed_controller');
const corpController = require('./controllers/corp_controller');
require('dotenv').config();

const app = express();
app.use( bodyParser.json());
massive(process.env.CONNECTION_STRING).then( dbInstance => app.set( 'db', dbInstance ) );
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}))

//wedding endpoints
app.post( '/api/wedding', wController.create );
app.get( '/api/wedding/:id', wController.getEvent );
app.put( '/api/wedding/:id', wController.update );
app.delete( '/api/wedding/:id', wController.delete );

//corporate endpoints
app.post( '/api/corp', wController.create );
app.get( '/api/corp/:id', wController.getEvent );
app.put( '/api/corp/:id?desc=...', wController.update );
app.delete( '/api/corp/:id', wController.delete );


//music endpoints
app.get('/api/music', wController.getMusic )
app.post('/api/playlist/:id', wController.createPlaylist) 
app.get('/api/playlist/:id', wController.getPlaylist)



const port = process.env.SERVER_PORT || 3030
app.listen( port, () => { console.log(`Everything is just really sexy on on port ${port}'`)}) 