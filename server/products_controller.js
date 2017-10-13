module.exports = {
    getAllBins: function (req, res){
        console.log(req.params.id)
        req.app.get('db').get_shelf(req.params.id).then( e => {
                console.log(e);
                res.status(200).send(e)} )
            .catch( () => res.status(500).send() );
    },

    getOneBin: function (req, res){
        req.app.get('db').get_bin(req.params.id).then (e => 
            res.status(200).send(e) )
            .catch( () => res.status(500).send() );
    },

    updateBin: function (req, res){
        req.app.get('db').update_bin(req.params.id)
            .then ()
    },

    deleteBin: function (req, res){

    },

    createNewBin: function (req, res){
        
    }

};
