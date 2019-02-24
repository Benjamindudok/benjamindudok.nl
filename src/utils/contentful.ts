import { ContentfulClientApi } from 'contentful';
import * as contentful from 'contentful';

export const client: ContentfulClientApi = contentful.createClient({
    space: process.env.VUE_APP_CONTENTFUL_SPACE,
    accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY
});

export const contentTypePost: string = 'post';
export const contentTypePage: string = 'page';