import { Entry } from 'contentful';
import { Component, Vue } from 'vue-property-decorator';
import { client, contentTypePost } from 'src/utils/contentful';
import Post, { IPostEntry } from 'src/utils/models/post';

@Component
export default class PageOverview extends Vue
{
    posts: Post[] = [];
    totalPosts: number = 0;
    totalPostsPerPage: number = 10;
    skippedPosts: number = 0;

    get pages(): number
    {
        return this.totalPosts / this.totalPostsPerPage;
    }

    get currentPage(): number
    {
        return this.skippedPosts / this.totalPostsPerPage;
    }

    mounted(): void
    {
        this.getPosts();
    }

    getPosts(): void
    {
        client.getEntries({
            limit: this.totalPostsPerPage,
            skip: this.skippedPosts,
            content_type: contentTypePost,
            select: 'fields.title,fields.introduction'
        }).then((data) =>
        {
            this.totalPosts = data.total;
            this.skippedPosts = data.skip + this.totalPostsPerPage;

            this.posts = [];
            data.items.forEach((e) =>
            {
                this.posts.push(new Post(e as Entry<IPostEntry>));
            });

            document.dispatchEvent(new Event('x-app-rendered'));
        });
    }

    onPageChange(newPageNumber: number): void
    {
        this.skippedPosts = (newPageNumber - 1) * this.totalPostsPerPage;
        this.getPosts();
    }
}