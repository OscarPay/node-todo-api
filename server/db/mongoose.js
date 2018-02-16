let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
    .then(
        () => console.log('Connection Success'),
        err => console.log('Unable to connect to db', err)
    );

module.exports = {mongoose};