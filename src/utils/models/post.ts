import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default class Post
{
    id!: string;
    title!: string;
    introduction!: string;
    createdAt!: Date;
    updatedAt!: Date;
    content!: string;

    constructor(entry: Entry<IPostEntry>)
    {
        this.id = entry.sys.id;
        this.title = entry.fields.title;
        this.introduction = entry.fields.introduction;
        this.createdAt = new Date(entry.sys.createdAt);
        this.updatedAt = new Date(entry.sys.updatedAt);
        this.content = documentToHtmlString(entry.fields.content);
    }
}

export interface IPostEntry
{
    title: string;
    introduction: string;
    content: any;
}