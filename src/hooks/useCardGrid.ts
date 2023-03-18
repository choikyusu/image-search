import { useEffect, useLayoutEffect, useState } from 'react';
import { throttle } from 'lodash';
import { toast } from 'react-toastify';
import { useSearchState } from '../provider/SearchProvider';
import useImageApi from './useImageApi';
import { ACTIVE_SCROLL_AREA, MAX_PAGE } from '../constants/value.constant';
import { REACH_LAST_PAGE } from '../constants/text.constant';

export default function useCardGrid() {
  const { imageInfoList, page, setPage, lastApiRequest } = useSearchState();
  const { apiLoading } = useImageApi();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    if (firstLoadApi()) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [apiLoading]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (loading || !reachBottom()) return;
      if (!imageInfoList.length) return;
      if (page >= MAX_PAGE || lastApiRequest) {
        toast(REACH_LAST_PAGE, { toastId: 'last' });
        return;
      }
      setPage(prev => prev + 1);
      setLoading(true);
    }, 200);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (loading) return () => {};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, page, imageInfoList]);

  useEffect(() => {
    if (!loading) {
      if (!existScrollbar() && !isInitState() && !lastApiRequest) {
        setPage(prev => prev + 1);
      }
      return;
    }
    setLoading(false);
  }, [imageInfoList]);

  return {
    imageInfoList,
    loadingType: getLoadingType(),
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

    return !(scrollY + innerHeight < offsetHeight - ACTIVE_SCROLL_AREA);
  }

  function getLoadingType(): LoadingType {
    if (apiLoading && page === 1) return 'InitLoading';
    if (loading) return 'ScrollLoading';
    return 'None';
  }

  function firstLoadApi() {
    return apiLoading && page === 1;
  }
}
