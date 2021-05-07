const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const app = express()

app.set('port', 5000)

mongoose.connect('mongodb+srv://Doretti:2Admin1EE@cluster0.hzn2q.mongodb.net/todos', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(e => console.error(e))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use('/api/todos', require('./routes/todos'))
app.use('/', express.static(path.join(__dirname, '../dist')))

app.listen(app.get('port'), () => {
    console.log(`Server is running on localhost:${app.get('port')}`)
})