// Custom middleware that logs out the type and path of each request to the server
// clog.js
const clogMiddleware = (req, res, next) => {
    console.log(`${req.method} request received at ${new Date()}`);
    next();
};

module.exports = clogMiddleware;