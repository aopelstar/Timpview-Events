module.exports ={
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { groom_name, bride_name, g_phone, b_phone, dates, time_frame, venue, auth_id } = req.body;
            
        dbInstance.wedding.create_wevent([groom_name, bride_name, g_phone, b_phone, dates, time_frame, venue, auth_id])
        .then( response => {
            console.log(response);
            res.status(200).send(response) })
        .catch( error => {
            console.log(error)
            res.status(500).send("failed to add")} );
        
    },

    getEvent: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.wedding.find_wevent( [req.user.auth_id] )
        .then( response => res.status(200).send(response[0]) )
        .catch( error => res.status(500).send(error) );

    },

    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { groom_name, bride_name, g_phone, b_phone, dates, time_frame, venue } = req.body
        console.log(req.body);
        console.log( "============+", req.user);

        dbInstance.wedding.update_wevent( [req.user.id, groom_name, bride_name, g_phone, b_phone, dates, time_frame, venue ])
        .then( response => {
            console.log(response);
            res.status(200).send(response)
        }).catch( error => {
            console.log(error)
            res.status(500).send("failed to update");
        })

    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.wedding.delete_wevent([ req.user.id ])
        .then(response => {
            req.logout()
            res.status(200).send("Event Deleted, succa") } )
        .catch(error => res.status(500).send(error) );

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

            return dbInstance.playlist.create_playlist( [req.user.id, element])
        })
        let promise = Promise.all( promiseArray )
        promise.then(res.send('you did it!'))
        .catch(e=> {
            console.log(e);
            res.status(500).send('problem in database')})
        
    },

    getPlaylist: (req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.playlist.find_playlist( [req.user.id.toString()] )
        .then( (result) => {
            res.status(200).send(result) })
        .catch( error => {
            res.status(500).send("whatevs")
        })
    }
}