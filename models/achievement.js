import mongoose from 'mongoose';

let achievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
});

export default mongoose.model("Achievement", achievementSchema);