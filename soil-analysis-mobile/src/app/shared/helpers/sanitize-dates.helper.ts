import * as moment from 'moment';

export function sanitizeDates(date: string): string {
  return moment(date).format('YYYY-MM-DD');
}
