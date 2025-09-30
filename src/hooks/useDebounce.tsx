import { DependencyList, useCallback, useEffect } from 'react';

function useDebounce( effect: () => void, dependency: DependencyList, delay: number = 1000): void {
  const callback = useCallback(effect, dependency);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export default useDebounce;
