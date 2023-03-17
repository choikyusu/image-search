import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import useImage from '../../../hooks/useImage';

export const DEFAULT_IMAGE_URL = '/images/default.png';

export default function Image(props: { imageSrc: string }) {
  const { imageSrc } = props;

  const { lazyStyle, defaultStyle, handleLoad, handleError } = useImage();

  return (
    <>
      <StyledDefaultImage style={defaultStyle} src={DEFAULT_IMAGE_URL} alt="" />
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

const StyledDefaultImage = styled.img``;
