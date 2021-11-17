import {IEntity} from "./IEntity";
import {ITheme} from "./ITheme";

export interface IMentorCard extends IEntity {
  readonly type: string;
  readonly username: string;
  readonly avatar: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly country: string;
  readonly city: string;
  readonly timezone: string;
  readonly languages: string[];
  readonly position: string;
  readonly companyName: string;
  readonly companyWebsite: string;
  readonly description: string;
  readonly theme: ITheme;
  readonly sessionsCount: number;
  readonly studentsCount: number;
  readonly userRating: {
    feedbackCount: number;
    total: number
  };
  readonly discountForFiveSessions: boolean;
  readonly discountForTenSessions: boolean;
  readonly reviewsCount: number;
  readonly hasCalendar: boolean;
}
