import moment from 'moment';

export default function (value: string, format: string = 'DD MMMM YYYY'): string {
    if (value)
    {
        return moment(String(value)).format(format);
    }

    return value;
}