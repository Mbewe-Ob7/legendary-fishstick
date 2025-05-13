// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('pages/home')
});

router.get('/about', (req, res) => {
    const data = { teamMembers: req.teamMembers };

    res.render('pages/about', data);
   
});

router.get('/events', (req, res) => {
    const data = { events: req.events };
    res.render('pages/events', data);
});

router.get('/contact', (req, res) => {
    //stores valid submission
    const { name, email, message } = req.body;
    if (name && email && message) {
        req.contactSubmissions.push({ name, email, message });     
    }

      res.render('pages/contact');

});
// POST /contact
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (name && email && message) {
        const submission = { name, email, message };
        req.contactSubmissions.push(submission);

        // write to aJSON file
        fs.writeFile('submissions.json', JSON.stringify(req.contactSubmissions, null, 2), (err) => {
            if (err) {
                console.error('Error writing to JSON file:', err);
            }
        });

        res.redirect('/thankyou');
    } else {
        res.render('pages/contact', { error: 'All fields are required' });
    }
});

router.get('/thankyou', (req, res) => {
    const lastSubmission = req.contactSubmissions[req.contactSubmissions.length - 1];
    const data = { name: lastSubmission?.name || 'Guest' };

    res.render('pages/thankyou',data);

});

module.exports = router;
