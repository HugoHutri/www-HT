import React from 'react';
import { Route } from 'react-router-dom';

const instance = ({ state, contextComponent, component, ...rest }) => {
  const { Provider } = contextComponent;
  const Component = component;

  return (
    <Route {...rest}>
      <Provider value={state}>
        <Component />
      </Provider>
    </Route>
  );
};

export default instance;