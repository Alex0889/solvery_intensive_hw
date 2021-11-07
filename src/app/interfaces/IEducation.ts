import {IEntity} from "./IEntity";

export interface IEducation extends IEntity {
  readonly institution: string,
  readonly course: string,
  readonly issueYear: number
}