import React, {ChangeEvent, FC, FormEvent} from 'react';
import {ITag} from "../../../../app/interfaces";
import {Button, Card, Checkbox} from "../../../../prebuilt/components";
import s from './Search.module.scss';
import {Tag} from "../MentorCard/partials";
import {useAppDispatch, useAppSelector} from "../../../../app/hook";
import {getAllMentors} from "../../../../app/features/mentor/thunks/getAllMentors";
import {clearMentors} from "../../../../app/features/mentor";
import {ReactComponent as CloseIcon} from './closeIcon.svg';
import _filter from 'lodash.filter';
import clsx from "clsx";
import {addUsedTag, removeTag, setLanguage, toggleSortByPrice} from "../../../../app/features/filters";
import Select from "../../../../prebuilt/components/Select";

export interface SelectProps {
  readonly className?: string,
  readonly options: ITag[],
}

const Search: FC<SelectProps> = (
  {
    options,
    className,
  }) => {
  const dispatch = useAppDispatch();
  const {filters: filter} = useAppSelector();
  const {filters, usedTags, sort} = filter;

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tag = options.find(option => option.id === Number(e.target.value));

    if (tag) {
      const isTagAlreadyUsed = usedTags.includes(tag);

      if (!isTagAlreadyUsed) {
        dispatch(addUsedTag(tag));
      }
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(clearMentors());
    dispatch(getAllMentors({
      filters,
      sort
    }));
  }

  const toggleLanguageItem = (e: ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.value.toLowerCase();

    if (lang) {
      const isLanguageAlreadyUsed = filters.language.includes(lang);

      if (isLanguageAlreadyUsed) {
        dispatch(setLanguage(_filter(
          filters.language,
          (language: string) => language.toLowerCase() !== lang)
        ));
      } else {
        dispatch(setLanguage([...filters.language, lang]));
      }
    }
  };

  const handleSortByPrice = () => {
    dispatch(toggleSortByPrice());
  };

  const handleRemoveTag = (tag: ITag) => {
    dispatch(removeTag(tag))
  };

  return (
    <Card className={clsx(s.root, className)}>
      <form onSubmit={submitHandler}>
        <div className={s.root__top}>
          <div className={s.root__select}>
            <Select
              defaultValue="DEFAULT"
              title='Что хотите изучить?'
              options={options}
              onChange={handleSelectChange}
            >
              {options.map(tag => (
                <option
                  key={tag.id}
                  value={tag.id}>{tag.nameEn}</option>
              ))}
            </Select>
          </div>
          <div className={s.root__tags}>
            {usedTags.length !== 0 && usedTags.map(tag => (
              <Tag
                key={tag.id}
                className={s.root__tag}>
                {tag.nameEn}
                <span onClick={() => handleRemoveTag(tag)}
                      className={s.root__closeBtn}>
                <CloseIcon/>
                </span>
              </Tag>
            ))}</div>
        </div>
        <div className={s.root__bottom}>
          <div className={s.root__actions}>
            <Checkbox
              onChange={handleSortByPrice}>
              Сортировка по цене
            </Checkbox>

            <Checkbox
              name={'en'}
              value={'en'}
              onChange={toggleLanguageItem}
              checked={filters.language.includes('en')}>
              На английском
            </Checkbox>
            <Checkbox
              name={'ru'}
              value={'ru'}
              onChange={toggleLanguageItem}
              checked={filters.language.includes('ru')}>
              На русском
            </Checkbox>
          </div>
          <div className={s.root__btn}>
            <Button
              theme={'primary'}
              type="submit"
              fullwidth>
              Поиск
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Search;