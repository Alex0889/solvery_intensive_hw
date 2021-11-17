import {IEntity} from "./IEntity";
import {IMentorTag} from "./IMentorTag";

export interface ITheme extends IEntity{
  readonly price: number;
  readonly currency: string;
  readonly tags: IMentorTag[];
  readonly mentorServices: {
    readonly messaging: {
      readonly enabled: boolean;
      readonly price: number;
    },
    readonly projectReview: {
      readonly enabled: boolean;
    }
  }
}
