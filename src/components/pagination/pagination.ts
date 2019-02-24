import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue
{
    @Prop()
    public pages!: number;

    @Prop({ default: 1 })
    public currentPage!: number;

    public visiblePageLimit: number = 7;

    private onPageSelect(page: number): void {
        this.$emit('page-selected', page);
    }

    private get linkClassesForPage(): (pageNumber: number) => any
    {
        return (pageNumber: number): any =>
        {
            return {
                'pagination__link': true,
                'pagination__link--isActive': pageNumber == this.currentPage || (!this.currentPage && pageNumber == 1)
            };
        };
    }

    private get pagesInRange(): any
    {
        const inRange: number[] = this.pagesInArray(this.pages);
        const start: number = Math.max(Math.floor(this.currentPage - (this.visiblePageLimit / 2)), 0);
        const end: number = Math.ceil(start + this.visiblePageLimit);

        return inRange.splice(start, (end - start));
    }

    private get pagesInArray(): (totalPages: number) => number[]
    {
        return (totalPages: number): number[] =>
        {
            const newArray: number[] = [];
            for (let i: number = 1; i < totalPages + 1; i++)
            {
                newArray.push(i);
            }
            return newArray;
        };
    }
}
