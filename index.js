const express = require('express');
const { getJobs, saveJobs } = require('./database');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// Automated task runner inside the web service since Render Free Cron is not available
async function runScraper() {
    console.log('Running automated job update...');
    const mockJobs = [
        { title: 'Generative AI Engineer', company: 'DeepMind', location: 'London/Remote', salary: '$160k - $240k', link: '#' },
        { title: 'AI Ethics Researcher', company: 'OpenAI', location: 'San Francisco', salary: '$150k - $210k', link: '#' },
        { title: 'LLM Fine-tuning Expert', company: 'Anthropic', location: 'Remote', salary: '$180k - $260k', link: '#' },
        { title: 'AI Solutions Architect', company: 'Microsoft', location: 'Remote', salary: '$140k - $200k', link: '#' },
        { title: 'Computer Vision Lead', company: 'Tesla', location: 'Austin, TX', salary: '$170k - $250k', link: '#' }
    ];
    await saveJobs(mockJobs);
    console.log('Job board updated.');
}

// Run on startup and then every hour
runScraper();
setInterval(runScraper, 3600000);

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
