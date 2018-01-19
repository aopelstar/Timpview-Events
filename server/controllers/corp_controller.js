module.exports ={
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { company, contact_name, phone, dates, time_frame, venue } = req.body;
        console.log(req.body);

        dbInstance.corporate.create_cevent([company, contact_name, phone, dates, time_frame, venue])
        .then( response => {
            res.status(200).send(response); 
            console.log(response);
        }).catch( error => res.status(500).send(error) );

    },

    getEvent: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.corporate.find_cevent( [req.params.id] )
        .then(response => {
            res.status(200).send(response[0] )})
        .catch( error => res.status(500).send(error) );
    },

    update: ( req, res, next ) => {

    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.corporate.delete_cevent([req.params.id] )
        .then(response => {
            res.status(200).send(response)
        })
        .catch( error => res.status(500).send(error) );

    }
}