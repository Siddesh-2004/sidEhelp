export const asyncHandler=(fn)=>async(req,res,next)=>{
    try {
         await fn(req, res, next);
    } catch (error) {
        console.error('Error in asyncHandler:', error);
        res.status(error.status || 500).json({ message: error.message || 'Internal Server Error' });
    }
}