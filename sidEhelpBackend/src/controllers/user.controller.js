import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { apiResponses } from "../utils/apiResponses.js";
const registerUser=asyncHandler(async (req, res) => {
    console.log(req.body);
    const {userName,fullName,email,password}=req.body;
    if(!userName?.trim()||!fullName?.trim()||!email?.trim()||!password?.trim())
    {
       throw new ApiError(400,"All fields are required");
    }
    const existingUser = await User.findOne({ email });
    if(existingUser) {
        throw new ApiError(409, "Email already exists");
    }
   const newUser = await User.create({
        userName: userName.toLowerCase(),
        fullName,
        email,
        password
    })
    const createdUser =await User.findById(newUser._id).select("-password -refreshToken");
    if(!createdUser) {
        throw new ApiError(500, "User creation failed");
    }
    return res.status(201).json(new apiResponses(201, createdUser, "User registered successfully"));

})
export {registerUser}