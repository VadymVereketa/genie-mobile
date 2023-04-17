import type {DependencyList, EffectCallback} from 'react';
import {useEffect, useRef} from 'react';

const useDidUpdateEffect = (fn: EffectCallback, inputs: DependencyList) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};

export default useDidUpdateEffect;
