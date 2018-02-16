const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a86cd88d9faac189a2152ed'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a86cd88d9faac189a2152ed').then((todo) => {
    console.log(todo);
});