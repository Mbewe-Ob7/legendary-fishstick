// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
});

router.get('/about', (req, res) => {
    const data = { teamMembers: req.teamMembers };
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
});

router.get('/thankyou', (req, res) => {
    const lastSubmission = req.contactSubmissions[req.contactSubmissions.length - 1];
    const data = { name: lastSubmission?.name || 'Guest' };
});

module.exports = router;
