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
      placeholderSrc={thumbnail}
      onError={handleError}
    />
  );
}
