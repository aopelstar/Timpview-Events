module.exports ={
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { company, contact_name, phone, dates, time_frame, venue } = req.body

        dbInstance.corporate.create_cevent([company, contact_name, phone, dates, time_frame, venue])
        .then( response => {
            res.status().send(response) 
        }).catch( error => res.status(500).send(error) );

    },

    getEvent: ( req, res, next ) => {

    },

    update: ( req, res, next ) => {

    },

    delete: ( req, res, next ) => {

    }
}