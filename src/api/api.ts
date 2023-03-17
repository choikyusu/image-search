import { IMAGE_SEARCH_URL } from '../constants/api.contant';

const MAX_SIZE = 10;

export async function getImages(params: {
  searchKeyword: string;
  order: string;
  page: number;
}) {
  const { searchKeyword, order, page } = params;
  try {
    const params: {
      size: number;
      query: string;
      sort: string;
      page: number;
      [key: string]: number | string;
    } = { size: MAX_SIZE, query: searchKeyword, sort: order, page };

    const paramString = Object.keys(params)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
      )
      .join('&');

    const response = await fetch(`${IMAGE_SEARCH_URL}?${paramString}`, {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    const result: ImageResult = await response.json();
    return result.documents || [];
  } catch (e) {
    return [];
  }
}
