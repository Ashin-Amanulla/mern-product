const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/CEV', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb Atlas connection established')
    })
    .catch(err => {
        console.log(err)
    })