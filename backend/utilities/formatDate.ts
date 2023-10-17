import { format } from 'date-fns';

function formatDate(date: Date): string {
    const formattedDate = format(date, 'dd LLL yyyy', { locale: require('date-fns/locale/pl') });
    return formattedDate;
}

export default formatDate;