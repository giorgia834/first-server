const logger = (req, res, next) => {//next to allow request to pass through
    console.log(req.method, req.originalUrl)
    next()
}

module.exports = logger