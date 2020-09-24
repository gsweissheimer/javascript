const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ImageSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ImageSchema.plugin(mongoosePaginate);

mongoose.model('Image', ImageSchema);