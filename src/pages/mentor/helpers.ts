import moment from "moment";

export const countDiscount = (percent: number, regularPrice: number): number => {
  return Math.ceil(regularPrice - ((regularPrice / 100) * percent));
}

export const propExists = (prop: any[] | undefined | null): boolean => !!prop && prop.length !== 0;

export const objExists = (obj: any): boolean => !!obj && Object.keys(obj).length !== 0;

export const dateBuilder = (date: number, format: string = 'MMMM YYYY'): string => moment(date).format(format);