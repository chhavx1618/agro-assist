const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/analytics', (req, res) => {
    res.render('analytics', { title: 'Analytics' });
});

router.get('/history', (req, res) => {
    res.render('history', { title: 'History' });
});

module.exports = router;
