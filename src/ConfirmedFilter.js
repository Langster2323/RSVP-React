import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
  <div>
    <h2>Invitees</h2>
    <label>
      <input
      type="checkbox"
      onChange={props.toggleFilter}
      checked={props.isFiltered} /> Hide those who have not responded
    </label>
  </div>

  export default ConfirmedFilter;
