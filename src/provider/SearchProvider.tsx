import React, { createContext, useContext, useMemo, useState } from 'react';

type SearchState = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
};

const SearchStateContext = createContext<SearchState | null>(null);

export default function SearchProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [order, setOrder] = useState<OrderType>('ACCURATE');
  const [keyword, setKeyword] = useState('');

  const value = useMemo(
    () => ({
      order,
      setOrder,
      keyword,
      setKeyword,
    }),
    [order, keyword],
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
