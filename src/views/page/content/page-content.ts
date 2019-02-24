import { Entry } from 'contentful';
import Post, { IPostEntry } from 'src/utils/models/post';
import { Component, Vue } from 'vue-property-decorator';
import { client } from 'src/utils/contentful';

@Component
export default class PageContent extends Vue
{
    post: Post | null = null;

    created(): void
    {
        client.getEntry(this.$route.params['entryId'])
            .then(entry =>
            {
                this.post = new Post(entry as Entry<IPostEntry>);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }
}