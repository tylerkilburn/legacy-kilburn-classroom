import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = props => (
  <nav className="menu_bar">
    {props.menuItems.map((item, index) => {
      const key = `menu-${index}`;
      return (
        <Link
          key={ key }
          className="menu_bar__item"
          to={ item.route }
        >
          {item.name}
        </Link>
      );
    })}
  </nav>
);

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default Menu;
