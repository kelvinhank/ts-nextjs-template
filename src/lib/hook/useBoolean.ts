import { useState } from 'react';

const useBoolean = (
  initialState = false
): [
  {
    state: boolean;
    on: () => void;
    off: () => void;
    toggle: () => void;
  }
] => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  const on = () => {
    setState(true);
  };

  const off = () => {
    setState(false);
  };

  return [{ state: state, on, off, toggle }];
};

export default useBoolean;
