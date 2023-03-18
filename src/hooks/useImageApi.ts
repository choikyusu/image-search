import { useCallback, useEffect, useState } from 'react';
import { getImages } from '../api/api';
import { useSearchState } from '../provider/SearchProvider';
import useError from './useError';

export default function useImageApi() {
  const [apiLoading, setApiLoading] = useState(false);
  const {
    searchKeyword,
    page,
    order,
    setImageInfoList,
    imageInfoList,
    setLastApiRequest,
  } = useSearchState();
  const { setError } = useError();

  const fetch = useCallback(async () => {
    if (searchKeyword === '') return;

    setApiLoading(true);

    try {
      const data = await getImages({ searchKeyword, order, page });

      if (isFirstPage()) setImageInfoList(data.documents);
      else if (data.documents.length)
        setImageInfoList([...imageInfoList, ...data.documents]);
      setLastApiRequest(data.meta.is_end);
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
