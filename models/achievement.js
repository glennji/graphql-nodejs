import mongoose from 'mongoose';

let achievementSchema = new mongoose.Schema({
    id: {type: String, required: false},
    description: {type: String, required: false},
    permalink: {type: String, required: true},
    series: {type: String, required: true},
    date: {type: String, required: true},
    badge_id: {type: String, required: false},
});

export default mongoose.model("Achievement", achievementSchema);