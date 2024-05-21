import dayjs from 'dayjs';

export function getCurrentTimeStamp(): number {
  return dayjs().unix();
}

export function convertDateByFormat(
  dateTime: string,
  format = 'YYYY-MM-DD hh:MM A'
): string {
  return dayjs(dateTime).format(format);
}

// export function getRemainingTime(startTime?: string, lockPeriod?: number): string {
//   const lockPeriodSeconds = lockPeriod || 0;
//   const currentTime = dayjs();
//   const startTimedayjs = startTime ? dayjs(startTime) : dayjs();
//   const elapsedTimeSeconds = currentTime.diff(startTimedayjs, 'seconds');
//   const remainingTimeSeconds = lockPeriodSeconds - elapsedTimeSeconds;

//   const remainingTime = dayjs.duration(Math.max(remainingTimeSeconds, 0), 'seconds');

//   const days = Math.floor(remainingTime.asDays());
//   const hours = remainingTime.hours().toString().padStart(2, '0');
//   const minutes = remainingTime.minutes().toString().padStart(2, '0');

//   if (days > 0) {
//     return `${days} day${days === 1 ? '' : 's'} ${hours}:${minutes}`;
//   }

//   return `${hours}:${minutes}`;
// }

export function convertSecondsToDay(second: number): string {
  return `${second / 24 / 60 / 60}`;
}
