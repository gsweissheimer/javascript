const mongoose = require('mongoose');

const Look = mongoose.model('Look');


module.exports = {

    async index(req,res) {

        const { page = 1, items = 3 } = req.query;

        const looks = await Look.paginate({ }, { page, limit: parseInt(items) });

        return res.json(looks);

    },

    async show(req,res) {

        const look = await Look.findById(req.params.id);

        return res.json(look);

    },

    async update(req,res) {

        const look = await Look.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        return res.json(look);

    },

    async destroy(req,res) {

        await Look.findByIdAndRemove(req.params.id);
        
        return res.send();

    },

    async store(req, res) {

        const look = await Look.create(req.body);

        return res.json(look);


    }

};
