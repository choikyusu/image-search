import { useEffect, useLayoutEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchState } from '../provider/SearchProvider';
import useImageApi from './useImageApi';

export default function useCardGrid() {
  const { imageInfoList, page, setPage } = useSearchState();
  const [loading, setLoading] = useState(false);
  const { apiLoading } = useImageApi();

  useLayoutEffect(() => {
    if (apiLoading && page === 1) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [apiLoading]);

  useEffect(() => {
    function handleScroll() {
      const { scrollY, innerHeight } = window;
      const { offsetHeight } = document.body;
      if (loading || scrollY + innerHeight < offsetHeight - 5) return;
      setPage(page + 1);
      setLoading(true);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (loading) return () => {};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  useEffect(() => {
    if (!loading) return;

    setLoading(false);
  }, [imageInfoList]);
  return {
    imageInfoList,
    initLoading: apiLoading && page === 1,
  };
}
