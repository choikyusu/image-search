import { useCallback, useEffect, useState } from 'react';
import { getImages } from '../api/api';
import { useSearchState } from '../provider/SearchProvider';

const MAX_PAGE = 50;

export default function useImageApi() {
  const [apiLoading, setApiLoading] = useState(false);
  const { searchKeyword, page, order, setImageInfoList, imageInfoList } =
    useSearchState();

  const fetch = useCallback(async () => {
    if (searchKeyword === '') return;
    if (page > MAX_PAGE) return;
    setApiLoading(true);
    try {
      const data = await getImages({ searchKeyword, order, page });

      if (page === 1) setImageInfoList(data);
      else setImageInfoList([...imageInfoList, ...data]);

      setApiLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchKeyword, page, order]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { apiLoading };
}
