const express = require('express');
const { getJobs } = require('./database');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const jobs = await getJobs();
        res.render('index', { jobs });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error loading job board');
    }
});

app.listen(port, () => {
    console.log(`AI Careers Board running on port ${port}`);
});
