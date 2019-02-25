import { Entry } from 'contentful';
import { client } from 'src/utils/contentful';
import Page, { IPageEntry } from 'src/utils/models/page';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue
{
    page: Page | null = null;

    created(): void
    {
        client.getEntry('5klzWs8nW9pLmeWh0u86B5')
            .then(entry =>
            {
                this.page = new Page(entry as Entry<IPageEntry>);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }
}