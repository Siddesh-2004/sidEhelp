import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    wordsCompleted: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Word',
        default: 0
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);
userSchema.pre("save",async function (next){
    if(!this.isModified('password')) return next();
    this.password=bcrypt.hash(this.password,10)
    next();
})
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ _id: this._id ,
    userName: this.userName,
    email: this.email,
    fullName: this.fullName
    }, 
    process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRY });
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRY });
}
export const User = mongoose.model('User', userSchema);
