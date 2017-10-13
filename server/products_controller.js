module.exports = {
    getAllBins: function (req, res){
        console.log(req.params.id)
        req.app.get('db').get_shelf(req.params.id).then( e => {
                var nullLength = 5 - e.length;
                for (var i = 0; i < nullLength; i++){
                    e.push(null);
                }
                console.log(e);
                res.status(200).send(e)} )
    },
    getOneBin: function (req, res){
        console.log(req.params.id)
        req.app.get('db').get_bin(req.params.id).then (e => 
            res.status(200).send(e) )
            .catch ( () =>
            res.status(500).send() );
    },
    updateBin: function (req, res){
        req.app.get('db').update_bin(req.params.id, req.body.name, req.body.price).then (e =>
             res.status(200).send(e) )
             .catch ( () =>
            res.status(500).send() );
    },
    deleteBin: function (req, res){
        req.app.get('db').delete_bin(req.params.id)
        .then(e=> {
            res.status(200).send()
        }).catch ( () =>
        res.status(500).send() );
    },
    createNewBin: function (req, res){
        req.app.get('db').create_new_bin(req.body.shelfid, req.params.id, req.body.name, req.body.price, req.body.image)
            .then ( e => res.status(200).send() )
            .catch ( () => res.status(500).send() )
    }

};
