const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const LookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    online: {
        type: Boolean,
        required: true
    }
});

LookSchema.plugin(mongoosePaginate);

mongoose.model('Look', LookSchema);