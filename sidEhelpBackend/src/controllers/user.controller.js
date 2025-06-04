import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { User } from '../models/user.model.js';
import { apiResponses } from '../utils/apiResponses.js';
import jwt from 'jsonwebtoken';

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error('Error generating tokens:', error);
    throw new ApiError(500, 'Something went wrong while generating tokens');
  }
};
const options = {
  httpOnly: true,
  secure: true,      // 👈 required if SameSite=None
  sameSite: 'None',  // 👈 required for cross-origin
  maxAge: 24 * 60 * 60 * 1000 // example: 1 day
};

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { userName, fullName, email, password } = req.body;
  if (
    !userName?.trim() ||
    !fullName?.trim() ||
    !email?.trim() ||
    !password?.trim()
  ) {
    throw new ApiError(400, 'All fields are required');
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, 'Email already exists');
  }
  const newUser = await User.create({
    userName: userName.toLowerCase(),
    fullName,
    email,
    password,
  });
  const createdUser = await User.findById(newUser._id).select(
    '-password -refreshToken',
  );
  if (!createdUser) {
    throw new ApiError(500, 'User creation failed');
  }
  return res
    .status(201)
    .json(new apiResponses(201, createdUser, 'User registered successfully'));
});
// username or email and pasword from the user
//validata the data
//if user exists then generate access token and refresh token
//send it to the user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email?.trim() || !password?.trim()) {
    throw new ApiError(400, 'All fields are required');
  }
  const validatedUser = await User.findOne({ email: email });
  console.log("validatedUser:", validatedUser);
  if (!validatedUser) {
    throw new ApiError(404, 'User not found');
  }
  const isPasswordValid = await validatedUser.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid Password');
  }
  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(validatedUser._id);
  const loggedInUser = await User.findById(validatedUser._id).select(
    '-password -refreshToken',
  );
  
  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new apiResponses(
        200,
        { loggedInUser, accessToken, refreshToken },
        'User logged in successfully',
      ),
    );
});
const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  await User.findByIdAndUpdate(
    userId,
    {
      $set: { refreshToken: undefined },
    },
    { new: true },
  );

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new apiResponses(200, null, 'User logged out successfully'));
});
const refreshAccessToken = asyncHandler(async (req, res) => {
    const token =req.cookies?.refreshToken||req.body?.refreshAccessToken||req.headers?.Authorization?.replace("Bearer ", "");
    console.log("Refresh Token:", token);
    if(!token) throw new ApiError(404,"Refresh token not found")
    try {
        const decodedUser=jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded User:", decodedUser);
        const user=await User.findById(decodedUser.id);
        if(!user) throw new ApiError(404,"User not found");
        if(user.refreshToken !== token) {
            throw new ApiError(401, "Invalid refresh token");
        }
        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

        return res
            .status(200)
            .cookie('accessToken', accessToken, options)
            .cookie('refreshToken', refreshToken, options)
            .json(
                new apiResponses(
                    200,
                    { accessToken, refreshToken },
                    'Tokens refreshed successfully',
                ),
            );
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw new ApiError(500, error.message||'Something went wrong while refreshing tokens');
        
    }
});
const checkAuthentication=asyncHandler(async(req,res)=>{
  const userId=req.user._id;
 if(!userId) throw new ApiError(401,"User not authenticated");
  try{
    
    const user=await User.findById(userId).select('-password -refreshToken');
    if(!user) throw new ApiError(404,"User not found");
    return res.status(200).json(new apiResponses(200, user, "User authenticated successfully"));
  }
  // } catch (error) {
  //   if(error.name === 'TokenExpiredError') {
  //      const token =req.cookies?.refreshToken||req.body?.refreshAccessToken||req.headers?.Authorization?.replace("Bearer ", "");
  //   console.log("Refresh Token:", token);
  //   if(!token) throw new ApiError(404,"Refresh token not found")
  //   try {
  //       const decodedUser=jwt.verify(token, process.env.JWT_SECRET);
  //       console.log("Decoded User:", decodedUser);
  //       const user=await User.findById(decodedUser.id);
  //       if(!user) throw new ApiError(404,"User not found");
  //       if(user.refreshToken !== token) {
  //           throw new ApiError(401, "Invalid refresh token");
  //       }
  //       const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

  //       return res
  //           .status(200)
  //           .cookie('accessToken', accessToken, options)
  //           .cookie('refreshToken', refreshToken, options)
  //           .json(
  //               new apiResponses(
  //                   200,
  //                   { accessToken, refreshToken },
  //                   'Tokens refreshed successfully, User authenticated successfully',
  //               ),
  //           );
  //   } catch (error) {
  //       console.error('Error refreshing access token:', error);
  //       throw new ApiError(500, error.message||'Something went wrong while refreshing tokens');
        
  //   }
     
  //   }
  // }
  catch(error) {
    console.error('Error checking authentication:', error);
    throw new ApiError(500, error.message || 'Something went wrong while checking authentication');
  }
})

export { registerUser, loginUser, logoutUser, refreshAccessToken, checkAuthentication };
