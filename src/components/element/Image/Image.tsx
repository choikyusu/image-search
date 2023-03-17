import { LazyLoadImage } from 'react-lazy-load-image-component';
import useImage from '../../../hooks/useImage';
import { SkeletonImage } from '../../molecules/SkeletonCard/SkeletonCard';

export const DEFAULT_IMAGE_URL = '/images/default.png';

export default function Image(props: { imageSrc: string }) {
  const { imageSrc } = props;

  const { lazyStyle, defaultStyle, handleLoad, handleError } = useImage();

  return (
    <>
      <SkeletonImage style={defaultStyle} />
      <LazyLoadImage
        style={lazyStyle}
        referrerPolicy="no-referrer"
        alt="이미지"
        src={imageSrc}
        placeholderSrc={DEFAULT_IMAGE_URL}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
}
