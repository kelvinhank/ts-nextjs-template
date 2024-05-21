export const shortenString = (
  str: string | undefined,
  firstLength = 6,
  lastLength = 4
) => {
  return str?.length
    ? `${str.substring(0, firstLength)}...${str?.substring(
        str?.length - lastLength,
        str?.length
      )}`
    : '';
};

export const numberFormat = (number: number | string) =>
  isNaN(Number(number)) ? '' : Number(number).toLocaleString();

export const getDateUTCString = (date: string | number) => {
  return new Date(date)
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
    .split('-')
    .join('/');
};

export const shortenAddress = (address?: string) => {
  return (
    (address && address.slice(0, 4) + '...' + address.slice(-4)) ||
    ''
  ).toLowerCase();
};

export function formatRank(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const camelToSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const convertObjectKeyCamelToSnakeCase = (obj: Record<any, any>) => {
  const keys = Object.keys(obj);
  return keys.reduce((result, key) => {
    const snakeCaseKey = camelToSnakeCase(key);
    result[snakeCaseKey] = obj[key];
    return result;
  }, {} as Record<any, any>);
};

// export function getLotteryTime(time: string): dayjs {
//   // TODO: set time
//   return dayjs(time).add(2, 'day').set('hour', 0).set('minute', 0);
// }
