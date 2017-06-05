import React from 'react';
import PropTypes from 'prop-types';
import PeriodSelect from '../PeriodSelect/PeriodSelect';
import Menu from '../Menu/Menu';


const ControlBar = props => (
  <div className="control_panel">
    <PeriodSelect
      period={ props.period }
      periodOptions={ props.periodOptions }
      setPeriod={ props.setPeriod }
    />
    <Menu
      menuItems={ props.menuItems }
    />
  </div>
);

ControlBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  period: PropTypes.number.isRequired,
  periodOptions: PropTypes.array.isRequired,
  setPeriod: PropTypes.func.isRequired,
};

export default ControlBar;
