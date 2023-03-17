import React, { useState } from 'react';
import { DEFAULT_IMAGE_URL } from '../components/element/Image/Image';

export default function useImage() {
  const [lazyStyle, setLazyStyle] = useState<React.CSSProperties>({
    visibility: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
  });
  const [defaultStyle, setDefaultStyle] = useState<React.CSSProperties>({
    display: 'block',
  });

  function handleLoad() {
    setLazyStyle({
      visibility: 'visible',
      position: 'static',
    });
    setDefaultStyle({ display: 'none' });
  }
  function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.target as HTMLImageElement;
    target.src = DEFAULT_IMAGE_URL;
    target.onerror = null;
  }

  return { defaultStyle, lazyStyle, handleLoad, handleError };
}
