import { useCallback, useEffect, useState } from 'react';
import { getImages } from '../api/api';
import { useSearchState } from '../provider/SearchProvider';
import useError from './useError';

export default function useImageApi() {
  const [apiLoading, setApiLoading] = useState(false);
  const { searchKeyword, page, order, setImageInfoList, imageInfoList } =
    useSearchState();
  const { setError } = useError();

  const fetch = useCallback(async () => {
    if (searchKeyword === '') return;

    setApiLoading(true);

    try {
      const data = await getImages({ searchKeyword, order, page });

      if (isFirstPage()) setImageInfoList(data);
      else if (data.length) setImageInfoList([...imageInfoList, ...data]);

      setApiLoading(false);
    } catch (error: any) {
      setError(error);
    }
  }, [searchKeyword, page, order]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { apiLoading };

  function isFirstPage() {
    return page === 1;
  }
}
