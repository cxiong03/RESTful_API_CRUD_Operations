const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.log('Could not connect to MongoDb...', err))

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [ String ],
        date: { type: Date, default: Date.now },
        isPublished: Boolean
    });

const Course = mongoose.model('Course', courseSchema); // Pascal to name course
const course = new Course({  // camel case to name object
    name: 'Node.js Course',
    author: 'Chang',
    tags: ['node', 'backend'],
    isPublished: true
});