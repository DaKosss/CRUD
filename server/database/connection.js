const mongoose = require('mongoose')


const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('-_Successfully сonnected to DB_-')
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB