import mongoose from "mongoose"; // import mongoose to create a schema = table = model

const newZoom = mongoose.Schema({
    country: String,
    city: String,
    numberOfPeople: {
        type: Number,
        default: 0
    },
    all: {
        type: Boolean,
        default: false
    },
    day: {
        type: Boolean,
        default: false
    },
    night: {
        type: Boolean,
        default: false
    },
    noise: {
        type: Number,
        default: 0
    },
    pictures: Array,
    price: {
        type: Number,
        default: 0
    },
    pets: Boolean, 
    wifi: Boolean, 
    workZone: Boolean,
    kitchen: Boolean,
    barbeque: Boolean,
    fridge: Boolean,
    pool: Boolean,
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    sunday: Boolean,
    creator: String,
    creatorId: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postZoom = mongoose.model('postZoom', newZoom);

export default postZoom;