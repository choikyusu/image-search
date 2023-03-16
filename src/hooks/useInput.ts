import { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

const MAX_LENGTH = 10;

export default function useInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showList, setShowList] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<{ key: string; value: string }[]>([
    { key: '1', value: 'a' },
    { key: '2', value: 'b' },
    { key: '3', value: 'c' },
    { key: '4', value: 'd' },
    { key: '5', value: 'e' },
    { key: '6', value: 'f' },
  ]);

  function handleClickItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = e.target as HTMLLIElement;
    setKeyword(target.innerHTML);
  }

  function handleClickDelete() {
    setList([]);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setKeyword(target.value);
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && keyword !== '') {
      const target = event.target as HTMLInputElement;
      event.preventDefault();
      setList([
        { key: new Date().getTime().toString(), value: keyword },
        ...list,
      ]);
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
