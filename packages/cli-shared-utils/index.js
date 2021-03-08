if (process.env.LOCAL_DEBUG) {
    module.exports = {
        log: require('./src/index')
    }
} else {
    module.exports = {
        log: require('./dist/index')
    }
}

