import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {WithSkeleton} from "../../components/WIthSkeleton";
import {Button, Listing, Page, Typography} from "../../prebuilt/components";
import {getAllMentors} from "../../app/features/mentor/thunks/getAllMentors";
import MentorCard from "./partials/MentorCard";
import Loader from "../../components/Loader";
import s from './mentors.module.scss';
import {getPagesCount} from "../../app/helpers";
import {getAllTags} from "../../app/features/tag/thunks/getAllTags";
import Search from "./partials/Search";
import {getAvailableMentorsString} from "./helpers";
import {RouteComponentProps} from "react-router";
import {useLocation, useHistory} from 'react-router-dom';
import {clearMentors} from "../../app/features/mentor";
import {nextPage, setIsUsedMentorTag, setMentorsTag} from "../../app/features/filters";
import NoDataImg from "../../components/NoDataImg";
import noData from "../../prebuilt/assets/img/No_data.jpg";
import somethingWentWrong from "../../prebuilt/assets/img/Something_went_wrong.jpg";

type LocationStateType = {
  tag?: number
}

export const MentorsPage: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  const location = useLocation<LocationStateType>();
  const dispatch = useAppDispatch();
  const {
    mentor: {mentors},
    tag: {tags},
    filters
  } = useAppSelector();

  const mentorsCount = mentors.totalMentorsCount - mentors.mentors.length;

  const [totalPageCount, setTotalPageCount] = useState<number>(0);

  useEffect(() => {
    if (mentors.mentors.length === 0) {
      dispatch(getAllMentors({}));
      dispatch(getAllTags());
    }
  }, [])

  useEffect(() => {
    if (location?.state?.tag) {
      const tagId = location.state.tag;
      const tag = tags.entities.find(tag => tag.id === tagId);
      if (tag) {
        dispatch(setMentorsTag(tag));
      }
      delete location.state.tag;
      history.replace(history.location.pathname, location.state)
    }
  }, [location]);

  useEffect(() => {
    if (filters.isUsedMentorTag) {
      dispatch(clearMentors());
      dispatch(getAllMentors({
        ...filters,
        pagination: {
          ...filters.pagination,
          page: 0
        }
      }));
      dispatch(setIsUsedMentorTag());
    }
  }, [filters.isUsedMentorTag]);

  useEffect(() => {
    setTotalPageCount(getPagesCount(mentors.totalMentorsCount, filters.pagination.limit))
  }, [mentors.totalMentorsCount, filters.pagination.limit]);

  const handlePaginationChange = () => {
    if (filters.pagination.page !== totalPageCount) {
      dispatch(nextPage());
      dispatch(getAllMentors(filters));
    }
  };

  const addButtonSlot = (mentors.isLoading && mentors.mentors.length !== 0) ?
    <Loader className={s.root__loader}/> :
    `Показать еще ${getAvailableMentorsString(mentorsCount)}`;

  return (
    <Page title="Менторы - Solvery.io" className={s.root}>
      <Typography tag="h1" preset="h1" className={s.root__title}>
        Знакомьтесь - менторы Solvery.io!
      </Typography>
      <Search options={tags.entities}/>
      <WithSkeleton
        isLoading={mentors.isLoading && mentors.mentors.length === 0}
        isEmpty={mentors.mentors.length === 0}
        error={mentors.error}
        skeletonSlot={<Loader/>}
        emptySpaceSlot={<NoDataImg image={noData}/>}
        errorSlot={<NoDataImg image={somethingWentWrong}/>}
      >
        <div className={s.root__mentorsCount}>На ресурсе
          доступно {getAvailableMentorsString(mentors.totalMentorsCount)}</div>
        <Listing>
          {mentors.mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor}/>
          ))}
        </Listing>
        {(mentors.isLoading || !(mentors.mentors.length === mentors.totalMentorsCount)) &&
        <div
          className={s.root__addMoreBtn}>
          <Button
            onClick={handlePaginationChange}
            theme={"primary"}
          >{addButtonSlot}
          </Button>
        </div>}
      </WithSkeleton>
    </Page>
  );
};
