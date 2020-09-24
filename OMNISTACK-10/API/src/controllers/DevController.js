const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

//index(list), show(show one), store(create), update(put), destroy(delete)

module.exports = {

    async index(request, response) {

        const devs = await Dev.find();

        return response.json(devs);

    },

    async destroy(request, response) {

        const _id = request.query;

        const dev = await Dev.findOne({ '_id':_id });

        if (dev) await Dev.deleteOne({ _id:_id });
        
        return response.json(dev);

    },

    async update(request, response) {

        const { techs, latitude, longitude, _id } = request.body;

        let dev = await Dev.findOne({ '_id':_id });

        if (!dev) {

            console.log('nao achou')
    
            return response.json({ });

        } else {
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
        
                type: 'Point',
                coordinates: [longitude, latitude]
            
            }
        
            dev = await Dev.updateOne({ _id:_id }, {
                
                techs: techsArray,
                location
        
            });
    
            return response.json(dev);

        }

    },

    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
    
            const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
        
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
        
                type: 'Point',
                coordinates: [longitude, latitude]
            
            }
        
            dev = await Dev.create({
        
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
        
            });

        }
    
        return response.json(dev);
    
    }

}