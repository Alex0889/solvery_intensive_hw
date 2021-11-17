import {IEntity} from "./IEntity";

export interface IMentorTag extends IEntity {
  readonly name: string;
  readonly url: string;
}
