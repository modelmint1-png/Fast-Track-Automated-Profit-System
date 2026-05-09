const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

async function saveJobs(jobs) {
    await redis.set('ai_jobs', JSON.stringify(jobs));
}

async function getJobs() {
    const data = await redis.get('ai_jobs');
    return data ? JSON.parse(data) : [];
}

module.exports = { saveJobs, getJobs };
