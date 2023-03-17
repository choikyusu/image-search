import { useRef, useState } from 'react';
import { IMAGE_SEARCH_URL } from '../constants/api.contant';
import { useSearchState } from '../provider/SearchProvider';
import useClickOutside from './useClickOutside';

const MAX_LENGTH = 10;
const KEY_ENTER = 13;

export default function useSearch() {
  const { keyword, setKeyword, setImageInfoList } = useSearchState();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showList, setShowList] = useState(false);
  const [recentSearchList, setRecentSearchList] = useState<KeywordItem[]>(
    getListFromLocalStorage(),
  );

  function handleClickItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = e.target as HTMLLIElement;
    setKeyword(target.innerHTML);
  }

  function handleClickDelete() {
    setRecentSearchList([]);
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
        ...recentSearchList,
      ];
      setRecentSearchList(newList);
      window.localStorage.setItem('list', JSON.stringify(newList));
      target.blur();

      console.log(`${IMAGE_SEARCH_URL}?query=${keyword}`);
      fetch(`${IMAGE_SEARCH_URL}?query=${keyword}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then((res: ImageResult) => {
          setImageInfoList(res.documents);
        })
        .catch(error => console.error(error));
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
    return JSON.parse(
      window.localStorage.getItem('list') || '[]',
    ) as KeywordItem[];
  }
}
