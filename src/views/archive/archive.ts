import { Entry } from 'contentful';
import { Component, Vue } from 'vue-property-decorator';
import { client, contentTypePost } from 'src/utils/contentful';
import Post, { IPostEntry } from 'src/utils/models/post';

@Component
export default class Archive extends Vue
{
    posts: Post[] = [];

    mounted(): void
    {
        this.getPosts();
    }

    getPosts(): void
    {
        client.getEntries({
            content_type: contentTypePost,
            select: 'fields.title,fields.slug'
        }).then((data) =>
        {
            this.posts = [];
            data.items.forEach((e) =>
            {
                this.posts.push(new Post(e as Entry<IPostEntry>));
            });

            document.dispatchEvent(new Event('x-app-rendered'));
        });
    }
}