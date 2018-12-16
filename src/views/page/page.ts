import { Component, Vue } from 'vue-property-decorator';
import pageContent from './content/page-content.vue';

@Component({
    components: {
        pageContent
    }
})
export default class Home extends Vue
{
    // empty
}