import React from 'react';
import { DEFAULT_IMAGE_URL } from '../components/element/Image/Image';

export default function useImage() {
  function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.target as HTMLImageElement;
    target.src = DEFAULT_IMAGE_URL;
    target.onerror = null;
  }

  return { handleError };
}
