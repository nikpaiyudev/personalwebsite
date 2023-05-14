const contentful = require('contentful');

const client = contentful.createClient({
    accessToken : process.env.CONTENTFUL_ACCESS_TOKEN as string,
    environment : process.env.CONTENTFUL_ACCESS_ENV,
    space : process.env.CONTENTFUL_SPACE_ID as string
});

export default client;