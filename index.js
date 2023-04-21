const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const connectDB = require('./server/database/connection')
const app = express();
const path = require('path')
dotenv.config({path: './server/services/config.env'})
const PORT = process.env.PORT || 8080;

// Логирование HTTP запросов
app.use(morgan('tiny'))

connectDB()

// Подключение шаблонизатора ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views/ejs"))


// Подключение assets файлов
app.use('/css', express.static(path.resolve(__dirname, '/assets/css')))
app.use('/img', express.static(path.resolve(__dirname, '/assets/img')))
app.use('/js', express.static(path.resolve(__dirname, '/assets/js')))

app.use(express.static('assets'));

// Подключение bodyparser
app.use(bodyparser.urlencoded({extended: true}))

app.use('/', require('./server/routes/router'))


app.listen(PORT, () => {
    console.log('сервер запущен на ' + PORT + ' порту')
})