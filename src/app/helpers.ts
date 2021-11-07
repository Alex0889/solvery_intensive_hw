import {ITheme} from "./interfaces";

export function fullNameBuilder(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function truncateString(str: string, num: number): string {
  return str.length <= num ? str : str.slice(0, num) + '...';
}

export const getPagesCount = (totalCount: number, limit: number):number => {
  return Math.ceil(totalCount / limit);
}

export const countPrice = (theme: ITheme): number => {
  if (theme.currency === 'rub') return theme.price;
  return theme.price * 70;
}