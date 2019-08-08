import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import DefaultLayout from '~/pages/_layouts/default';

const RouteWrapper = ({
  component: Component,
  simple,
  searchable,
  onlyComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        onlyComponent ? (
          <Component {...props} />
        ) : (
          <DefaultLayout simple={simple} searchable={searchable}>
            <Component {...props} />
          </DefaultLayout>
        )
      }
    />
  );
};
RouteWrapper.propTypes = {
  simple: PropTypes.bool,
  searchable: PropTypes.bool,
  onlyComponent: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  simple: false,
  onlyComponent: false,
  searchable: true,
};

export default RouteWrapper;
