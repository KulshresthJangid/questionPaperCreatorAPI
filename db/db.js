const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("DB connection successfull")
}).catch((e) => {
    console.log("Error while connecting to DB", e)
})