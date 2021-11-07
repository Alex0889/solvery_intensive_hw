import {LandingPage} from "../../pages/landing";
import {MentorsPage} from "../../pages/mentors";
import MentorPage from "../../pages/mentor";

export const ROUTES = {
  homepage: {
    url: '/',
    name: 'Главная',
    component: LandingPage,
    exact: true
  },
  mentors: {
    url: '/mentors',
    name: 'Менторы',
    component: MentorsPage,
    exact: true
  },
  mentor: {
    url: '/mentors/:id([0-9]+)',
    name: 'Ментор',
    component: MentorPage,
    exact: true
  }
};

export const ROUTE_LIST = [
  ROUTES.homepage,
  ROUTES.mentors,
  ROUTES.mentor,
];

export const ROUTE_LIST_COMMON = [
  ROUTES.homepage,
  ROUTES.mentors,
];
