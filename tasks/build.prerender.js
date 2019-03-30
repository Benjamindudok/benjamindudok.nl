var contentful = require('contentful');

module.exports = (api, options) =>
{
    api.registerCommand('build:prerender', async (args) =>
    {
        const client = contentful.createClient({
            space: process.env.VUE_APP_CONTENTFUL_SPACE,
            accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY
        });

        const entries = await client.getEntries({
            limit: this.totalPostsPerPage,
            skip: this.skippedPosts,
            content_type: 'post',
            select: 'fields.title'
        });

        options.pluginOptions.prerenderSpa.renderRoutes = [
            '/',
            '/about',
            ...entries.items.map((i) => `/page/${i.sys.id}`)
        ];

        await api.service.run('build', args);
    });
};

module.exports.defaultModes = {
    'build:prerender': 'production'
};