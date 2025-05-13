// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   
    res.render('pages/home')
});

router.get('/about', (req, res) => {
    const data = { teamMembers: req.teamMembers };
    res.render('pages/about', data);
   
});

router.get('/events', (req, res) => {
    const data = { events: req.events };
});

router.get('/contact', (req, res) => {
    //stores valid submission
    const { name, email, message } = req.body;
    if (name && email && message) {
        req.contactSubmissions.push({ name, email, message });
    }
      res.render('pages/contact');
});

router.get('/thankyou', (req, res) => {
    const lastSubmission = req.contactSubmissions[req.contactSubmissions.length - 1];
    const data = { name: lastSubmission?.name || 'Guest' };
    res.render('pages/thankyou');
});

module.exports = router;
