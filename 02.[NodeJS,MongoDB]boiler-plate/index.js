const express = require('express')
const app = express()
const port = 3000
// const { app } = require('express');

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://root:root@youtubeclone.r0052.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}). then(()=> console.log('MongoDB Succesfully Connected!'))
    .catch(err=> console.log(err))

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, () => console.log(`Example app listening on port ${port}`))