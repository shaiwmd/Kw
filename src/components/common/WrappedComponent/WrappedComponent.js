import React from 'react';

const WrappedComponent = Component => ({ children, ...rest }) => (
  <Component {...rest}>{children}</Component>
);

export default WrappedComponent;
