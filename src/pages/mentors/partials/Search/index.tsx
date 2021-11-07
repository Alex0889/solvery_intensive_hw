import React, {ChangeEvent, FC, FormEvent, SelectHTMLAttributes, useState} from 'react';
import {ITag} from "../../../../app/interfaces";
import {Button, Card, Checkbox} from "../../../../prebuilt/components";
import s from './Search.module.scss';
import {Tag} from "../MentorCard/partials";
import {useAppDispatch} from "../../../../app/hook";
import {getAllMentors} from "../../../../app/features/mentor/thunks/getAllMentors";
import {objExists} from "../../../mentor/helpers";
import {clearMentors} from "../../../../app/features/mentor";
import {ReactComponent as CloseIcon} from './closeIcon.svg';
import filter from 'lodash.filter';
import Select from "../Select";

export type SelectProps = {
  readonly className?: string,
  readonly options: ITag[],
  readonly changeSort?: (sort: boolean) => void,
}


const Search: FC<SelectProps & SelectHTMLAttributes<HTMLSelectElement>> = ({
                                                                             options,
                                                                             className,
                                                                             changeSort,
                                                                             ...props
                                                                           }) => {
  const dispatch = useAppDispatch();

  const [sort, setSort] = useState({});
  const [tagIds, setTagIds] = useState<number[]>([]);
  const [languages, setLanguages] = useState<string[]>(["ru"]);
  const [ruLang, setRuLang] = useState<boolean>(true);
  const [enLang, setEnLang] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState<string>('DEFAULT');

  const [usedTags, setUsedTags] = useState<ITag[]>([]);

  const useTag = (e: ChangeEvent<HTMLSelectElement>) => {
    const tag = options.find(option => option.id === +e.target.value);
    const checkDouble = tag && usedTags.includes(tag);
    !checkDouble && changeState(tag!);
    setDefaultValue('DEFAULT');
  }

  const changeState = (tag: ITag) => {
    setTagIds([...tagIds, Number(tag!.id)]);
    setUsedTags([...usedTags, tag!]);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearMentors());
    dispatch(getAllMentors({
      filters: {tagIds, language: languages},
      sort
    }));
  }

  const toggleLanguageItem = (e: ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.value.toLowerCase();
    const check = lang && languages.includes(lang);
    check ?
      setLanguages((languages) => filter(languages, (language: string) => language.toLowerCase() !== lang.toLowerCase())) :
      setLanguages((languages) => [...languages, lang]);
      lang === 'ru' && setRuLang(!ruLang);
      lang === 'en' && setEnLang(e.target.checked);
  }

  const sortHandler = () => {
    !objExists(sort) ?
      setSort({
        rate: true
      }) :
      setSort({})
  }

  const removeTagHandler = (id: string | number) => {
    setUsedTags((usedTags) => filter(usedTags, (tag: ITag) => tag.id !== id));
    setTagIds((tagIds) => filter(tagIds, (tagId) => tagId !== id));
  }

  return (
    <Card className={s.root}>
      <form onSubmit={submitHandler}>
        <div className={s.root__top}>
          <div className={s.root__select}>
            <Select defaultValue={defaultValue} title={'Что хотите изучить?'} options={options} onChange={useTag}>
              {options.map(tag => (
                <option key={tag.id} value={tag.id}>{tag.nameEn}</option>
              ))}
            </Select>
          </div>
          <div className={s.root__tags}>
            {usedTags.length !== 0 && usedTags.map(tag => (
            <Tag key={tag.id} className={s.root__tag}>{tag.nameEn} <span onClick={() => removeTagHandler(tag.id)}
                                                                         className={s.root__closeBtn}><CloseIcon/></span></Tag>
          ))}</div>
        </div>
        <div className={s.root__bottom}>
          <div className={s.root__actions}>
            <Checkbox onChange={() => setSort(sortHandler)}>Сортировка по цене</Checkbox>
            <Checkbox name={'en'} value={'en'} onChange={toggleLanguageItem} checked={enLang}>На английском</Checkbox>
            <Checkbox name={'ru'} value={'ru'} onChange={toggleLanguageItem} checked={ruLang}>На русском</Checkbox>
          </div>
          <div className={s.root__btn}>
            <Button theme={'primary'} type="submit" fullwidth>Поиск</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Search;