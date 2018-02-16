let env = process.env.NODE_ENV || 'development';

if (process.env.PORT) {
    process.env.MONGODB_URI = 'mongodb://admin:admin@ds059284.mlab.com:59284/todoapp';
} else {
    process.env.PORT = 3000;

    if (env === 'development') {
        process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
    } else if (env === 'test') {
        process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
    }
}
