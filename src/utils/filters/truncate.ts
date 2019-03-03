
export default function (value: string, length: number = 100): string {
    if (value && value.length > length)
    {
        return value.substring(0, length) + '...';
    }

    return value;
}