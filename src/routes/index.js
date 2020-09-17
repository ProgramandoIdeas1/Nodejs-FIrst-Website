const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'first web'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Form Login'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Page'
    })
})

module.exports = router