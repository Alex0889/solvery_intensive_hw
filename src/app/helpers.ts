import {ITheme} from "./interfaces";

export const getMentorFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
}

export const truncateString = (str: string, num: number): string => {
  return str.length <= num ? str : str.slice(0, num) + '...';
}

export const getPagesCount = (totalCount: number, limit: number):number => {
  return Math.ceil(totalCount / limit);
}

export const countPrice = (theme: ITheme): number => {
  if (theme.currency === 'rub') return theme.price;
  return theme.price * 70;
}

export const priceWithLocale = (price: number): string => {
  return price.toLocaleString('ru-RU', {
    currency: 'RUB',
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export const getImgLink = (url: string): string => {
  return `https://solvery.io/${url}`;
}

