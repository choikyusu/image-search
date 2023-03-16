import { useEffect } from 'react';

export default function useClickOutside(
  targetRef: React.RefObject<HTMLDivElement>,
  callback: () => void,
) {
  const handleClick = (e: MouseEvent) => {
    if (
      targetRef.current &&
      !targetRef.current.contains(e.target as HTMLElement)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
