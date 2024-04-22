import { useRef, useEffect, useCallback } from 'react';
import { CancelToken, isCancel } from 'axios';

export const useCancelToken = () => {
  const axiosSources = useRef([]);

  const newCancelToken = useCallback(() => {
    const source = CancelToken.source();
    axiosSources.current.push(source);
    return source.token;
  }, []);

  const cancelAll = useCallback(() => {
    axiosSources.current.forEach(source => {
      source.cancel();
    });
    axiosSources.current = [];
  }, []);

  useEffect(() => {
    return () => {
      axiosSources.current.forEach(source => {
        source.cancel();
      });
      axiosSources.current = [];
    };
  }, []);

  return { newCancelToken, isCancel, cancelAll };
};