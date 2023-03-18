import AuthKeyError from '../ErrorBoundary/Error/AuthKeyError';

export function checkAuthKey() {
  if (!process.env.REACT_APP_KAKAO_REST_API_KEY)
    throw new AuthKeyError('키값이 비었음');
}
