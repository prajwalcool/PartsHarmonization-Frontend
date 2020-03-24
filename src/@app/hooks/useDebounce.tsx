import { useRef } from 'react';
import _ from '@lodash';

function useDebounce(
  func: any,
  wait?: number | undefined,
  options?: _.DebounceSettings | undefined
) {
  return useRef(_.debounce(func, wait, options)).current;
}

export default useDebounce;
