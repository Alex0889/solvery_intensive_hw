import {IEntity} from "./IEntity";

export interface IPost extends IEntity {
  readonly name: string;
  readonly link?: string;
}
