import {IEntity} from "./IEntity";

export interface IProject extends IEntity {
  readonly name: string,
  readonly projectWebsite?: string,
  readonly mentorContribution?: string
}