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
    res.render('pages/contact',{ error: null });

});
// POST /contact
router.post('/contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    if (firstName && lastName && email && message) {
        const submission = { firstName, lastName, email, message };
        req.contactSubmissions.push(submission);//stores submission info in array 
        console.log('req.contactSubmissions after push:', req.contactSubmissions);

        const filePath = 'submissions.json';
    // reads the existing contents of the JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
        let submissions = [];

        if (!err && data) {
         try {
            submissions = JSON.parse(data); // convert th json string to array
         } catch (parseErr) {
            console.error('Error parsing existing JSON:', parseErr);
         }
        }

    submissions.push(submission);//add the new submission to the array
        //write t he updated array to the json file
    fs.writeFile(filePath, JSON.stringify(submissions, null, 2), (writeErr) => {
        if (writeErr) {
            console.error('Error writing to JSON file:', writeErr);
        } else {
            console.log('Successfully added to submissions.json');
        }
    });
});

        res.redirect('/thankyou');//redirects to thank you page
    } else {
        res.render('pages/contact', { error: 'All fields are required' });
    }
});

router.get('/thankyou', (req, res) => {
    const lastSubmission = req.contactSubmissions[req.contactSubmissions.length - 1];
    const displayName = lastSubmission.firstName ? lastSubmission.firstName : (lastSubmission.name || 'Guest');
    res.render('pages/thankyou', { name: displayName });

});

module.exports = router;
