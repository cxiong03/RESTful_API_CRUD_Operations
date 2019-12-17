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

async function createCourse() {
    const course = new Course({  // camel case to name object
        name: 'Angular Course',
        author: 'Chang',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

createCourse();