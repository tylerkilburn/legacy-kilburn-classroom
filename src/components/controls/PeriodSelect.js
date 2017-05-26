import React from 'react';
import PropTypes from 'prop-types';

class PeriodSelect extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const period = parseInt(evt.target.value || 0);
        this.props.setPeriod(period);
    }

    render () {
        return (
            <div className="period_select">
                <label htmlFor="period_select" className="period_select__label">Period:</label>
                <select
                    name="period_select" id="period_select" className="period_select__select"
                    onChange={this.handleChange}
                >
                    <option value="">-Select a Period-</option>
                    {this.props.periods.map((period, key) => {
                        return <option key={key} value={period}>{period}</option>
                    })}
                </select>
            </div>
        );
    }
}

PeriodSelect.propTypes = {
    periods: PropTypes.array.isRequired
}

export default PeriodSelect;