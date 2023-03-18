import { IMAGE_SEARCH_URL } from '../constants/api.contant';
import { ERROR_SERVER_RESPONSE } from '../constants/text.constant';
import { MAX_SIZE, RESPONSE_SUCESS } from '../constants/value.constant';
import NetworkError from '../ErrorBoundary/Error/NetworkError';

export async function getImages(params: {
  searchKeyword: string;
  order: string;
  page: number;
}) {
  const { searchKeyword, order, page } = params;
  try {
    const params: QueryParameter = {
      size: MAX_SIZE,
      query: searchKeyword,
      sort: order,
      page,
    };
    const paramString = getQueryString(params);
    const response = await fetch(`${IMAGE_SEARCH_URL}?${paramString}`, {
      headers: getApiHeader(),
    });

    if (response.status === RESPONSE_SUCESS) {
      const result: ImageResult = await response.json();
      return result.documents || [];
    }
    throw new NetworkError(ERROR_SERVER_RESPONSE);
  } catch (e: any) {
    if (e instanceof Error) throw e;
  }
  return [];
}

function getApiHeader() {
  return {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
    'Content-Type': 'application/json',
  };
}

function getQueryString(params: QueryParameter) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}
