import mongoose from 'mongoose';

let badgeSchema = new mongoose.Schema({
    id: {type: String, required: false},
    title: {type: String, required: false},
    description: {type: String, required: false},
    permalink: {type: String, required: true},
});

export default mongoose.model("Badge", badgeSchema);