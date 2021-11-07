import {IEntity} from "./IEntity";

export interface IJob extends IEntity {
  readonly position: string,
  readonly startDate: number,
  readonly endDate: number,
  readonly isUntilNow: boolean,
  readonly employer: string,
  readonly employerWebsite: string
}