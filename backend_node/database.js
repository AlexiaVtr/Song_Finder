import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:/app/backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( db => console.log('Database is connected...'))
.catch(e => console.log(e));