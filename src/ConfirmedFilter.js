import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
  <div>
    <h2>Invitees</h2>
    <label>
      <input
      type="checkbox"
      onChange={this.toggleFilter}
      checked={this.state.isFiltered} /> Hide those who have not responded
    </label>
  </div>

  export default ConfirmedFilter;
