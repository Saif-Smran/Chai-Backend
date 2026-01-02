// promise based error handler for express js

const asyncHandler =(requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>{next(err)});
    }
};

export { asyncHandler }



// try catch wrapper for async functions

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.status || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//         })
//     }
// }