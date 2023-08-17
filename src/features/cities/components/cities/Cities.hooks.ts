import { useEffect, RefObject, useCallback } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, onClose: () => void): void => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [ref, onClose],
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent): void => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [handleClickOutside]);
};
