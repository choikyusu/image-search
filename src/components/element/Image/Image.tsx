import { LazyLoadImage } from 'react-lazy-load-image-component';
import useImage from '../../../hooks/useImage';

export const DEFAULT_IMAGE_URL = '/images/default.png';

export default function Image(props: { imageSrc: string; thumbnail: string }) {
  const { imageSrc, thumbnail } = props;

  const { handleError } = useImage();

  return (
    <LazyLoadImage
      referrerPolicy="no-referrer"
      alt="이미지"
      src={imageSrc}
      placeholderSrc={DEFAULT_IMAGE_URL} // thumbnail이 비율이 달라 사용 안함.
      onError={handleError}
    />
  );
}
