var contentful = require('contentful');

module.exports = (api, options) =>
{
    api.registerCommand('build:prerender', async (args) =>
    {
        const client = contentful.createClient({
            space: process.env.VUE_APP_CONTENTFUL_SPACE,
            accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY
        });

        const pages = await client.getEntries({
            content_type: 'page',
            select: 'fields.slug'
        });

        const posts = await client.getEntries({
            content_type: 'post',
            select: 'fields.slug'
        });

        console.log(pages, posts);

        options.pluginOptions = {
            prerenderSpa: {
                renderRoutes: [
                    '/',
                    ...pages.items.map((i) => `/${i.fields.slug}`),
                    ...posts.items.map((i) => `/articles/${i.fields.slug}`)
                ],
                useRenderEvent: true,
                onlyProduction: true
            }
        };

        await api.service.run('build', args);
    });
};

module.exports.defaultModes = {
    'build:prerender': 'production'
};