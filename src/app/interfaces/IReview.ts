import {IEntity} from "./IEntity";

export interface IReviews extends IEntity{
  readonly messages: IReview[];
}

export interface IReview extends IEntity {
  readonly message: string;
  readonly createdAt: number;
  readonly userRating?: number;
  readonly author: {
    readonly fullName: string;
    readonly avatar?: string | null;
  }
}
