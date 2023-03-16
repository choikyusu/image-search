import { useEffect, useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

const MAX_LENGTH = 10;
const KEY_ENTER = 13;

export default function useSearch() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showList, setShowList] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<KeywordItem[]>([]);

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

  useEffect(() => {
    const list = JSON.parse(
      window.localStorage.getItem('list') || '[]',
    ) as KeywordItem[];
    setList(list);
  }, []);

  return {
    inputRef,
    keyword,
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
}
