import { useEffect, useLayoutEffect, useState } from 'react';
import { throttle } from 'lodash';
import { toast } from 'react-toastify';
import { useSearchState } from '../provider/SearchProvider';
import useImageApi from './useImageApi';

const HEIGHT_MARGIN = 200;

export default function useCardGrid() {
  const { imageInfoList, page, setPage } = useSearchState();
  const [loading, setLoading] = useState(false);
  const { apiLoading } = useImageApi();

  useLayoutEffect(() => {
    if (apiLoading && page === 1) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [apiLoading]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (loading || !reachBottom()) return;
      setPage(prev => prev + 1);
      setLoading(true);
    }, 200);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (loading) return () => {};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      if (!existScrollbar() && !isInitState()) {
        toast('스크롤이 생기지않아 다음페이지를 불러옵니다.');
        setPage(prev => prev + 1);
      }
      return;
    }

    setLoading(false);
  }, [imageInfoList]);
  return {
    imageInfoList,
    initLoading: apiLoading && page === 1,
  };

  function existScrollbar() {
    return (
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight
    );
  }

  function isInitState() {
    return !(page >= 1 && imageInfoList.length);
  }

  function reachBottom() {
    const { scrollY, innerHeight } = window;
    const { offsetHeight } = document.body;

    return !(scrollY + innerHeight < offsetHeight - HEIGHT_MARGIN);
  }
}
