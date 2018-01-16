module.exports ={
    create: ( req, res, next ) => {

    },

    getEvent: ( req, res, next ) => {

    },

    update: ( req, res, next ) => {

    },

    delete: ( req, res, next ) => {

    },

    getMusic: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.songs.get_songs()
        .then( (result) => {
            res.status(200).send(result) })
        .catch( (e) =>{
             res.status(500).send('you done screwed up') });
        
    }
}