import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DefaultLayout from '~/pages/_layouts/default';
import AuthLayout from '~/pages/_layouts/auth';

const RouteWrapper = ({
  component: Component,
  simple,
  searchable,
  onlyComponent,
  isPrivate,
  ...rest
}) => {
  const signed = useSelector(state => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && rest.path === '/login') {
    return <Redirect to="/portal" />;
  }

  const Layout = isPrivate ? AuthLayout : DefaultLayout;

  return (
    <Route
    
      {...rest}
      render={props =>
        onlyComponent ? (
          <Component {...props} />
        ) : (
          <Layout simple={simple} searchable={searchable}>
            <Component {...props} />
          </Layout>
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
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  simple: false,
  onlyComponent: false,
  searchable: true,
  isPrivate: false,
};

export default RouteWrapper;
