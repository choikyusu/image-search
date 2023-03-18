import { ERROR_EMPTY_AUTH_KEY } from '../constants/text.constant';
import AuthKeyError from '../ErrorBoundary/Error/AuthKeyError';

export function checkAuthKey() {
  if (!process.env.REACT_APP_KAKAO_REST_API_KEY)
    throw new AuthKeyError(ERROR_EMPTY_AUTH_KEY);
}
