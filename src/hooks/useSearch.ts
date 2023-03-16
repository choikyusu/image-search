import { useRef, useState } from 'react';
import { useSearchState } from '../provider/SearchProvider';
import useClickOutside from './useClickOutside';

const MAX_LENGTH = 10;
const KEY_ENTER = 13;

export default function useSearch() {
  const { keyword, setKeyword } = useSearchState();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showList, setShowList] = useState(false);
  const [list, setList] = useState<KeywordItem[]>(getListFromLocalStorage());

  function handleClickItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = e.target as HTMLLIElement;
    setKeyword(target.innerHTML);
  }

  function handleClickDelete() {
    setList([]);
    window.localStorage.setItem('list', '[]');
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setKeyword(target.value);
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (
      event.key === 'Enter' &&
      event.keyCode === KEY_ENTER &&
      keyword !== ''
    ) {
      const target = event.target as HTMLInputElement;
      event.preventDefault();
      const newList = [
        { key: new Date().getTime().toString(), value: keyword },
        ...list,
      ];
      setList(newList);
      window.localStorage.setItem('list', JSON.stringify(newList));
      target.blur();
    }
  }

  function handleInputClick() {
    setShowList(true);
  }

  useClickOutside(inputRef, () => {
    setShowList(false);
  });

  return {
    inputRef,
    list,
    recentList: list.slice(0, MAX_LENGTH),
    showList,
    setShowList,
    handleClickItem,
    handleClickDelete,
    handleInputChange,
    handleInputKeyDown,
    handleInputClick,
  };

  function getListFromLocalStorage() {
    return JSON.parse(
      window.localStorage.getItem('list') || '[]',
    ) as KeywordItem[];
  }
}
