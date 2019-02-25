import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default class Page
{
    id!: string;
    title!: string;
    content!: string;

    constructor(entry: Entry<IPageEntry>)
    {
        this.id = entry.sys.id;
        this.title = entry.fields.title;
        this.content = documentToHtmlString(entry.fields.content);
    }
}

export interface IPageEntry
{
    title: string;
    content: any;
}