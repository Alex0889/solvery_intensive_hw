import { IEntity } from './IEntity';

export interface ITag extends IEntity {
  readonly name?: string;
  readonly url?: string;
  readonly isCategory?: number;
  readonly nameRu: string;
  readonly nameEn: string;
}
