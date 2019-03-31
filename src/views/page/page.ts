import { Entry } from 'contentful';
import Post, { IPostEntry } from 'src/utils/models/post';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { client, contentTypePage, contentTypePost } from 'src/utils/contentful';

@Component
export default class Page extends Vue
{
    page: Post | null = null;

    mounted(): void
    {
        this.getPost();
    }

    @Watch('$route')
    getPost(): void
    {
        const entryId: string | null = this.$route.params['slug'] || null;

        if (entryId)
        {
            client.getEntries({
                    content_type: contentTypePage,
                    'fields.slug': entryId
                })
                .then(data =>
                {
                    if (data.items.length > 0)
                    {
                        const entry: Entry<any> = data.items[0];

                        this.page = new Post(entry as Entry<IPostEntry>);
                    }

                    document.dispatchEvent(new Event('x-app-rendered'));
                })
                .catch(error =>
                {
                    console.log(error);
                });
        }
    }
}