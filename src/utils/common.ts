export function getDataByKey(obj: any, key: string) {
  if (key in obj) {
    return obj[key];
  } else {
    return null;
  }
}
