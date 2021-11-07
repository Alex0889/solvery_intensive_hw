import React, {FC, useEffect} from 'react';
import {Page} from "../../prebuilt/components";
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {getMentorById} from "../../app/features/mentor/thunks/getMentorById";
import {fullNameBuilder} from "../../app/helpers";
import s from './mentor.module.scss';
import {WithSkeleton} from "../../components/WIthSkeleton";
import Hero from "./partials/Hero";
import Prices from "./partials/Prices";
import Help from "./partials/Help";
import Jobs from "./partials/Jobs";
import Projects from "./partials/Projects";
import Education from "./partials/Education";
import Posts from "./partials/Posts";
import Reviews from "./partials/Reviews";
import GoBackLink from "./partials/GoBackLink";
import {objExists} from "./helpers";
import Info from "./partials/Info";
import Loader from "../../components/Loader";

type MentorParams = {
  readonly id: string;
}

const MentorPage: FC = () => {
  const {id} = useParams<MentorParams>();
  const dispatch = useAppDispatch();
  const {
    mentor: {mentor: {error, isLoading, user}}
  } = useAppSelector();

  useEffect(() => {
    dispatch(getMentorById(+id));
  }, []);

  const titleBuilder = objExists(user) ?
    `${fullNameBuilder(user.firstName, user.lastName)} - наставник на Solvery.io`:
    'Solvery.io';

  return (
    <Page title={titleBuilder}>
      <WithSkeleton
        isLoading={isLoading}
        isEmpty={!objExists(user)}
        error={error}
        skeletonSlot={<Loader/>}
      >
        <div className={s.root}>
          <GoBackLink/>
          <div className={s.root__body}>
            <div className={s.root__left}>
              <Hero user={user}/>
              <Prices user={user}/>
            </div>
            <div className={s.root__right}>
              <Info user={user}/>
              <Help user={user}/>
              <Jobs user={user}/>
              <Projects user={user}/>
              <Education user={user}/>
              <Posts user={user}/>
              <Reviews user={user}/>
            </div>
          </div>
        </div>
      </WithSkeleton>
    </Page>
  );
};

export default MentorPage;