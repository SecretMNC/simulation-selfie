module.exports = {
    getAllBins: function (req, res){
        req.app.get('db').get_shelf(req.params.id).then()
    }
};
