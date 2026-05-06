import { useEffect, useState } from "react";

export function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);

  return debouncedValue;
}
