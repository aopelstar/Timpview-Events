module.exports ={
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { groom_name, bride_name, g_phone, b_phone, dates, time_frame, venue } = req.body;

        dbInstance.wedding.create_wevent([groom_name, bride_name, g_phone, b_phone, dates, time_frame, venue])
        .then( response => {
            res.status(200).send(response) })
        .catch( error => res.status(500).send(error) );
        
    },

    getEvent: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.wedding.find_wevent( [req.params.id] )
        .then( response => res.status(200).send(response[0]) )
        .catch( error => res.status(500).send(error) );

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
        
    }, 

    createPlaylist: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { songs } = req.body;
        let promiseArray = songs.map(element =>{

            return dbInstance.playlist.create_playlist( [req.params.id, element])
        })
        let promise = Promise.all( promiseArray )
        promise.then(res.send('you did it!'))
        .catch(e=> {
            console.log(e);
            res.status(500).send('problem in database')})
        
    },

    getPlaylist: (req, res, next ) => {

    }
}