import React from 'react';
import PropTypes from 'prop-types';

const GuestList = props =>

  <ul>
  {props.guests.map((guest, index) =>
    <li>
      <span>Joel</span>
      <label>
        <input type="checkbox" /> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
    )}
  </ul>;

  GuestList.propTypes = {
    guests: PropTypes.array.isRequired
  }

export default GuestList;
