import mongoose,{Schema} from "mongoose";
const wordSchema = new Schema({
 
  wordsCompleted: {
    type: Number,
    default: 0
  }
}, { timestamps: true });
export const Word = mongoose.model('Word', wordSchema);