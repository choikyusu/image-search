import { useRef, useState } from 'react';
import { useSearchState } from '../provider/SearchProvider';
import useClickOutside from './useClickOutside';
import { toast } from 'react-toastify';
import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from '../utils/storage.util';
import { DELETE_RECENT_KEYWORD_MESSGAE } from '../constants/text.constant';

const MAX_LENGTH = 10;
const KEY_ENTER = 13;

export default function useSearch() {
  const [keyword, setKeyword] = useState(
    getValueFromLocalStorage<string>('keyword'),
  );
  const { setPage, setSearchKeyword, setLastApiRequest } = useSearchState();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showList, setShowList] = useState(false);
  const [recentSearchList, setRecentSearchList] = useState<string[]>(
    getValueFromLocalStorage<string[]>('list', 'array'),
  );

  function handleClickItem(item: string) {
    setValueToLocalStorage('keyword', item);
    setSearchKeyword(item);
    setKeyword(item);
    setPage(1);
    setLastApiRequest(false);

    updateRecentSearchList(item);
  }

  function handleClickDeleteItem(item: string) {
    deleteItemAtRecentSearchList(item);
    if (item === keyword) setValueToLocalStorage('keyword', '');
  }

  function handleClickDeleteAll() {
    setRecentSearchList([]);
    setValueToLocalStorage('list', '[]');
    setValueToLocalStorage('keyword', '');
    toast(DELETE_RECENT_KEYWORD_MESSGAE, { toastId: 'delete' });
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
      setValueToLocalStorage('keyword', keyword);
      setSearchKeyword(keyword);
      setPage(1);
      target.blur();
      setShowList(false);
      setLastApiRequest(false);
    }
  }

  function handleInputClick() {
    setShowList(true);
  }

  useClickOutside(inputRef, () => {
    setShowList(false);
  });

  return {
    inputProps: {
      keyword,
      inputRef,
      handleInputChange,
      handleInputKeyDown,
      handleInputClick,
    },
    dropdownListProps: {
      showList,
      recentList: recentSearchList.slice(0, MAX_LENGTH),
      handleClickDeleteAll,
      handleClickDeleteItem,
      handleClickItem,
    },
  };

  function updateRecentSearchList(keyword: string) {
    let newList: string[] = [];
    if (recentSearchList.indexOf(keyword) > -1) {
      const filteredList = recentSearchList.filter(item => item !== keyword);
      newList = [keyword, ...filteredList];
    } else {
      newList = [keyword, ...recentSearchList];
    }

    setRecentSearchList(newList);
    setValueToLocalStorage('list', JSON.stringify(newList));
  }

  function deleteItemAtRecentSearchList(keyword: string) {
    setRecentSearchList(recentSearchList.filter(item => item !== keyword));
    setValueToLocalStorage(
      'list',
      JSON.stringify(recentSearchList.filter(item => item !== keyword)),
    );
  }
}
