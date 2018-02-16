let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://admin:admin@ds149268.mlab.com:49268/todoapp'
};

mongoose.connect(process.env.PORT ? db.mlab : db.localhost, {useMongoClient: true})
    .then(
        () => require('./db-init')(server),
        err => console.log('Unable to connect to db', err)
    );

module.exports = {mongoose};