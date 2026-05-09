const { saveJobs } = require('../database');

async function scrape() {
    console.log('Starting automated AI job search...');
    
    // Simulate fetching jobs from various AI job APIs/sources
    const mockJobs = [
        { title: 'Generative AI Engineer', company: 'DeepMind', location: 'London/Remote', salary: '$160k - $240k', link: '#' },
        { title: 'AI Ethics Researcher', company: 'OpenAI', location: 'San Francisco', salary: '$150k - $210k', link: '#' },
        { title: 'LLM Fine-tuning Expert', company: 'Anthropic', location: 'Remote', salary: '$180k - $260k', link: '#' },
        { title: 'AI Solutions Architect', company: 'Microsoft', location: 'Remote', salary: '$140k - $200k', link: '#' },
        { title: 'Computer Vision Lead', company: 'Tesla', location: 'Austin, TX', salary: '$170k - $250k', link: '#' }
    ];

    await saveJobs(mockJobs);
    console.log('Successfully updated job board with 5 fresh AI roles.');
    process.exit(0);
}

scrape().catch(err => {
    console.error('Scraper failed:', err);
    process.exit(1);
});
