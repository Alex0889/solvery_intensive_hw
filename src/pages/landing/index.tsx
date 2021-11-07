import { Hero } from "./partials/Hero";
import { Plan } from "./partials/Plan";
import { TechnologyList } from "./partials/TechnologyList";
import {Page} from "../../prebuilt/components";

export const LandingPage: React.FC = () => (
  <Page title="Интенсив по современной Frontend разработке - Solvery.io">
    <Hero />
    <Plan />
    <TechnologyList />
  </Page>
);
