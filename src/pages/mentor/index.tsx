import React, {FC, useEffect} from 'react';
import {Page} from "../../prebuilt/components";
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {getMentorById} from "../../app/features/mentor/thunks/getMentorById";
import {getMentorFullName} from "../../app/helpers";
import s from './mentor.module.scss';
import {WithSkeleton} from "../../components/WIthSkeleton";
import {
  Hero,
  Help,
  Projects,
  Reviews,
  Info,
  Jobs,
  Prices,
  GoBackLink,
  Posts,
  Education
} from "./partials";
import {objExists} from "./helpers";
import Loader from "../../components/Loader";
import NoDataImg from "../../components/NoDataImg";
import noData from "../../prebuilt/assets/img/No_data.jpg";
import somethingWentWrong from "../../prebuilt/assets/img/Something_went_wrong.jpg";

type MentorParams = {
  readonly id: string;
}

const MentorPage: FC = () => {
  const {id} = useParams<MentorParams>();
  const dispatch = useAppDispatch();
  const {
    mentor: {mentor}
  } = useAppSelector();
  const {error, isLoading, user} = mentor;

  useEffect(() => {
    dispatch(getMentorById(Number(id)));
  }, [dispatch, id]);

  const title = user ?
    `${getMentorFullName(user.firstName, user.lastName)} - наставник на Solvery.io` :
    'Solvery.io';

  return (
    <Page title={title}>
      <WithSkeleton
        isLoading={isLoading}
        isEmpty={!objExists(user)}
        error={error}
        skeletonSlot={<Loader/>}
        emptySpaceSlot={<NoDataImg image={noData}/>}
        errorSlot={<NoDataImg image={somethingWentWrong}/>}
      >
        <div className={s.root}>
          <GoBackLink/>
          <div className={s.root__body}>
            <div className={s.root__left}>
              <Hero user={user!}/>
              <Prices user={user!}/>
            </div>
            <div className={s.root__right}>
              <Info user={user!}/>
              <Help user={user!}/>
              <Jobs user={user!}/>
              <Projects user={user!}/>
              <Education user={user!}/>
              <Posts user={user!}/>
              <Reviews user={user!}/>
            </div>
          </div>
        </div>
      </WithSkeleton>
    </Page>
  );
};

export default MentorPage;