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
        req.app.get('db').get_bin(req.params.id).then (e => 
            res.status(200).send(e) )
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
