import { useReducer, useEffect } from 'react';

const formReducer = (state, { type, ...rest }) => {
  switch (type) {
    case '':
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
};

const useFormReducer = () => {
  const [form, dispatch] = useReducer(formReducer, {});

  return [form, dispatch];
};

// use with useCallback Hook

// useCallback(() => {
//   dispatch({ type: '', ...rest });
// }, []);
