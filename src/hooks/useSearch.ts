import { useRef, useState } from 'react';
import { useSearchState } from '../provider/SearchProvider';
import useClickOutside from './useClickOutside';
import { toast } from 'react-toastify';

const MAX_LENGTH = 10;
const KEY_ENTER = 13;

export default function useSearch() {
  const [keyword, setKeyword] = useState('');
  const { setPage, setSearchKeyword } = useSearchState();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showList, setShowList] = useState(false);
  const [recentSearchList, setRecentSearchList] = useState<string[]>(
    getListFromLocalStorage(),
  );

  function handleClickItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = e.target as HTMLLIElement;
    setSearchKeyword(target.innerHTML);
    setKeyword(target.innerHTML);
    setPage(1);

    updateRecentSearchList(target.innerHTML);
  }

  function handleClickDelete() {
    setRecentSearchList([]);
    window.localStorage.setItem('list', '[]');
    toast('최근 검색어를 삭제했습니다.', { toastId: 'delete' });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setKeyword(target.value);
  }

  async function handleInputKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (
      event.key === 'Enter' &&
      event.keyCode === KEY_ENTER &&
      keyword !== ''
    ) {
      const target = event.target as HTMLInputElement;
      event.preventDefault();
      updateRecentSearchList(keyword);
      setPage(1);
      target.blur();
      setShowList(false);
    }
  }

  function handleInputClick() {
    setShowList(true);
  }

  useClickOutside(inputRef, () => {
    setShowList(false);
  });

  return {
    keyword,
    inputRef,
    list: recentSearchList,
    recentList: recentSearchList.slice(0, MAX_LENGTH),
    showList,
    setShowList,
    handleClickItem,
    handleClickDelete,
    handleInputChange,
    handleInputKeyDown,
    handleInputClick,
  };

  function getListFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem('list') || '[]') as string[];
  }

  function updateRecentSearchList(keyword: string) {
    let newList: string[] = [];
    if (recentSearchList.indexOf(keyword) > -1) {
      const filteredList = recentSearchList.filter(item => item !== keyword);
      newList = [keyword, ...filteredList];
    } else {
      newList = [keyword, ...recentSearchList];
    }

    setSearchKeyword(keyword);
    setRecentSearchList(newList);
    window.localStorage.setItem('list', JSON.stringify(newList));
  }
}
