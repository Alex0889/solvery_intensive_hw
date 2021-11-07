import React, {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {WithSkeleton} from "../../components/WIthSkeleton";
import {Button, Listing, Page, Typography} from "../../prebuilt/components";
import {getAllMentors} from "../../app/features/mentor/thunks/getAllMentors";
import MentorCard from "./partials/MentorCard";
import Loader from "../../components/Loader";
import s from './mentors.module.scss';
import {pluralize} from "numeralize-ru";
import {getPagesCount} from "../../app/helpers";
import {getAllTags} from "../../app/features/tag/thunks/getAllTags";
import SingleSelect from "./partials/Search";

export const MentorsPage: React.FC = () => {
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [pagination, setPagination] = useState({
    limit: 10,
    page: Number(0)
  });

  const dispatch = useAppDispatch();
  const {
    mentor: {mentors},
    tag: {tags}
  } = useAppSelector();

  useEffect(() => {
    dispatch(getAllMentors({pagination}));
  }, [dispatch, pagination]);

  useEffect(() => {
    dispatch(getAllTags());
  }, [])

  useMemo(() => {
    setTotalPageCount(getPagesCount(mentors.entities.totalMentorsCount, pagination.limit))
  }, [mentors.entities.totalMentorsCount, pagination.limit]);


  const paginationHandler = () => {
    (pagination.page !== totalPageCount) && setPagination({...pagination, page: pagination.page + 1});
  }

  const mentorsCount = mentors.entities.totalMentorsCount - mentors.entities.mentors.length;

  const availableMentorsString = (count: number): string => `${count} ${pluralize(count, 'ментор', 'ментора', 'менторов')}`;

  const addButtonContent = (mentors.isLoading && mentors.entities.mentors.length !== 0) ?
    <Loader className={s.root__loader}/> :
    `Показать еше ${availableMentorsString(mentorsCount)}`;

  return (
    <Page title="Менторы - Solvery.io" className={s.root}>
      <Typography tag="h1" preset="h1" className={s.root__title}>
        Знакомьтесь - менторы Solvery.io!
      </Typography>
      <SingleSelect options={tags.entities}/>
      <WithSkeleton
        isLoading={mentors.isLoading && mentors.entities.mentors.length === 0}
        isEmpty={mentors.entities.mentors.length === 0}
        error={mentors.error}
        skeletonSlot={<Loader/>}
      >
        <div className={s.root__mentorsCount}>На ресурсе доступно {availableMentorsString(mentors.entities.totalMentorsCount)}</div>
        <Listing>
          {mentors.entities.mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor}/>
          ))}
        </Listing>
        <div className={s.root__addMoreBtn}>
          <Button
            onClick={paginationHandler}
            theme={"primary"}
          >{addButtonContent}
          </Button>
        </div>
      </WithSkeleton>
    </Page>
  );
};
