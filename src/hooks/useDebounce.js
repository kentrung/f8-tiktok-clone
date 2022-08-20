import { useState, useEffect } from 'react';

const useDebounce = (value = '', delay = 500) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setVal(value), delay);

    return () => clearTimeout(timeoutId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return val;
};

export default useDebounce;
