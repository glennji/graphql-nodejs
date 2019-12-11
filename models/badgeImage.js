import mongoose from 'mongoose';

let badgeImageSchema = new mongoose.Schema({
    badge_id: {type: String, required: false},
    tiny: {type: String, required: true},
    small: {type: String, required: false},
    medium: {type: String, required: false},
    large: {type: String, required: false},
    xlarge: {type: String, required: false},
});

export default mongoose.model("Badgeimage", badgeImageSchema);