import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt  from "jsonwebtoken";
import { User } from "../models/user.model.js";
export const verifyJwt = asyncHandler(async(req,_,next) => {
    try {
        const token=req.cookies?.accessToken|| req.headers?.Authorization?.replace("Bearer ", "")
        if(!token) throw new ApiError(404,"Access token not found");
        console.log("Token:", token);
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await User.findById(decoded?._id).select("-password -refreshToken")
        if(!user) throw new ApiError("User not found", 404);
        req.user=user
        next()
    } catch (error) {
        throw new ApiError(500,error.message || "Something went wrong while verifying JWT");
    }
})