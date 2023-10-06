import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

// Publish DateをDayjsで変換　例：2023/08/01
export const formatDate = (date: string) => {
  return dayjs(date).tz('Asia/Tokyo').format('YYYY年MM月DD日');
};
