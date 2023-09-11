export default function formatData(data: string) {
    const date = new Date(data); 
 
    const day = date.getDate(); 
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`
}
 