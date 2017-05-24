import React from 'react';
import PropTypes from 'prop-types';

const PeriodSelect = (props) => {
    return (
        <div className="period_select">
            <label htmlFor="period_select" className="period_select__label">Period:</label>
            <select name="period_select" id="period_select" className="period_select__select">
                <option value="">-Select a Period-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    );
}

PeriodSelect.propTypes = {
    periods: PropTypes.array.isRequired
}

export default PeriodSelect;