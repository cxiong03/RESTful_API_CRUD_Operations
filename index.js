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

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;


    const courses = await Course
        .find({ author: 'Chang', isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;
    course.isPublished = true;
    course.author = 'Another Author';
    
    const result = await course.save();
    console.log(result);
}
updateCourse('5df8343b76a500322d2d6698');