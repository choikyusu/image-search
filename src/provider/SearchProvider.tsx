import React, { createContext, useContext, useMemo, useState } from 'react';

type SearchState = {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
  imageInfoList: ImageInfo[];
  setImageInfoList: React.Dispatch<React.SetStateAction<ImageInfo[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const SearchStateContext = createContext<SearchState | null>(null);

export default function SearchProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [order, setOrder] = useState<OrderType>('accuracy');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [imageInfoList, setImageInfoList] = useState<ImageInfo[]>([]);
  const [page, setPage] = useState(1);

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
  if (!state) throw new Error('Cannot find searchProvider');
  return state;
}
