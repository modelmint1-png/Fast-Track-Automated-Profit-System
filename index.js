const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const jobs = [
    { title: 'AI Research Engineer', company: 'Neural Future', location: 'Remote', salary: '$140k - $200k', link: '#' },
    { title: 'ML Ops Specialist', company: 'DataScale', location: 'Remote', salary: '$120k - $170k', link: '#' },
    { title: 'AI Content Strategist', company: 'GenAI Labs', location: 'Remote', salary: '$90k - $130k', link: '#' },
    { title: 'Prompt Engineer', company: 'ModelMint', location: 'Remote', salary: '$100k - $150k', link: '#' },
    { title: 'Computer Vision Architect', company: 'Visionary AI', location: 'Remote', salary: '$150k - $220k', link: '#' }
];

app.get('/', (req, res) => {
    res.render('index', { jobs });
});

app.listen(port, () => {
    console.log(`AI Job Board running at http://localhost:${port}`);
});
