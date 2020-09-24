const mongoose = require('mongoose');
const { index } = require('./LookController');

const Image = mongoose.model('Image');


module.exports = {

    async index(req,res) {

        const images = await Image.find();

        return res.json(images);

    },

    async store(req, res) {

        const upData = {
            path: "http://localhost:3001/tmp/uploads/",
            name: req.file.filename
        }

        const image = await Image.create(upData);

        return res.json(image);


    }

};
