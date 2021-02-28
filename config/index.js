const dev_prod = process.env.NODE_ENV;

export const absoluteURL = dev_prod !== 'production' ? 'http://localhost:5000' : 'https://proshop-ma.netlify.app'