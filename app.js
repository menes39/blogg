const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = '3000'
const linkim = 'https://blogggmenes.herokuapp.com/'
const hostname ='127.0.0.1'
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/blogg_db',{
    //hazır kod parçaları
    useNewUrlParser: true,     
    useUnifiedTopology: true,
   
})

app.use(express.static('public')) //statik dosyalarsı okuttukk cssler vs.vs.

app.engine('handlebars', exphbs.engine()); 
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('site/index')
})

app.get('/about', (req,res) => {
    res.render('site/about')
})

app.get('/blog', (req,res) => {
    res.render('site/blog')
})

app.get('/contact', (req,res) => {
    res.render('site/contact')
})

app.get('/login', (req,res) => {
    res.render('site/login')
})

app.get('/register', (req,res) => {
    res.render('site/register')
})

app.get('/posts/new', (req,res) => {
    res.render('site/addpost')
})



// app.get('/', (req, res) => {
//     res.send('İndex sayfasi')
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'about.html'))
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'contact.html'))
// })

// app.get('/404', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '404.html'))
// })

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'site/index.html'))
// })



// app.get('/blog', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'site/blog.html'))
// })

// app.get('/about', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'site/about.html'))
// })


// app.get('/users/:userID/movies/:moviesID', (req,res) => {
//     res.send(
//         `
//         <h1> kullanıcı adı: ${req.params.userID}</h1>
//         <h1> film adı: ${req.params.moviesID}</h1>
//         `
//     )
// })

app.listen(process.env.linkim || port, hostname, () => console.log(` Server running, http://${hostname}:${port}/`))

// const http = require('http')
// const fs = require('fs')


// const hostname ='127.0.0.1'
// const port = 3000

// const indexPage = fs.readFileSync('index.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const notFoundPage = fs.readFileSync('404.html')

// const server = http.createServer ( (req,res) => {
//     if (req.url === '/') {
//         return res.end(indexPage)
//     } else if (req.url === '/about') {
//         return res.end(aboutPage)
//     } else if (req.url === '/contact') {
//         return res.end(contactPage)
//     } else {
//         res.statusCode = 404
//         res.end(notFoundPage)
//     }
// })


// server.listen(port, hostname, () => {
//     console.log(`Server Çalışıyor, http://${hostname}:${port}!`)
// })