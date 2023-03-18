import React, { createContext, useContext, useMemo, useState } from 'react';
import { ERROR_NOT_FIND_PROVIDER } from '../constants/text.constant';
import { getValueFromLocalStorage } from '../utils/storage.util';

type SearchState = {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
  imageInfoList: ImageInfo[];
  setImageInfoList: React.Dispatch<React.SetStateAction<ImageInfo[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lastApiRequest: boolean;
  setLastApiRequest: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchStateContext = createContext<SearchState | null>(null);

export default function SearchProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [order, setOrder] = useState<OrderType>('accuracy');
  const [searchKeyword, setSearchKeyword] = useState(
    getValueFromLocalStorage<string>('keyword'),
  );
  const [imageInfoList, setImageInfoList] = useState<ImageInfo[]>([]);
  const [page, setPage] = useState(1);
  const [lastApiRequest, setLastApiRequest] = useState(false);

  const value = useMemo(
    () => ({
      order,
      setOrder,
      searchKeyword,
      setSearchKeyword,
      imageInfoList,
      setImageInfoList,
      page,
      setPage,
      lastApiRequest,
      setLastApiRequest,
    }),
    [order, searchKeyword, imageInfoList, page],
  );

  return (
    <SearchStateContext.Provider value={value}>
      {children}
    </SearchStateContext.Provider>
  );
}

export function useSearchState() {
  const state = useContext(SearchStateContext);
  if (!state) throw new Error(ERROR_NOT_FIND_PROVIDER);
  return state;
}
