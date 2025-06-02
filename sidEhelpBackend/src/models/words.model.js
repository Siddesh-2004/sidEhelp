import mongoose,{Schema} from "mongoose";
const wordSchema = new Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  synonym: {
    type: [String],
    required: true,
  },
    antonym: {
        type: [String],
        required: true,
    },
  exampleSentence: {
    type: [String],
    required: true,
  },
  wordsCompleted: {
    type: Number,
    default: 0
  }
}, { timestamps: true });
export const Word = mongoose.model('Word', wordSchema);