import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="header">
    { props.siteName }
  </div>
);

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Header;
