import { useCallback, useRef } from 'react';

export default function useDebounce(callback: any, delay = 1000) {
  const timer: any = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
}
