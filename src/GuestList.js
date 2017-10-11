import React from 'react';
import PropTypes from 'prop-types';

/*Sublist Component...
Successfully rendering itself
with data from the state.*/
const GuestList = props =>

  <ul>
  {props.guests.map((guest, index) =>
    <li key={index}>
      <span>{guest.name}</span>
      <label>
        <input type="checkbox" checked={guest.isConfirmed}/> Confirmed
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
