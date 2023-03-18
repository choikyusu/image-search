import { useCallback, useEffect, useState } from 'react';
import { getImages } from '../api/api';
import { useSearchState } from '../provider/SearchProvider';
import { toast } from 'react-toastify';
import useError from './useError';

const MAX_PAGE = 50;

export default function useImageApi() {
  const [apiLoading, setApiLoading] = useState(false);
  const { searchKeyword, page, order, setImageInfoList, imageInfoList } =
    useSearchState();
  const { setError } = useError();

  const fetch = useCallback(async () => {
    if (searchKeyword === '') return;
    if (page > MAX_PAGE) {
      toast('마지막 페이지에 도달했습니다.');
      return;
    }
    setApiLoading(true);
    try {
      const data = await getImages({ searchKeyword, order, page });

      if (page === 1) setImageInfoList(data);
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
}
