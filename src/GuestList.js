import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

/*Sublist Component...
Successfully rendering itself
with data from the state.*/
const GuestList = props =>
/*toggleConfirmationAt... Closure...
*/
  <ul>
  {props.guests.map((guest, index) =>
    <Guest
    key={index}
    name={guest.name}
    isConfirmed={guest.isConfirmed}
    handleConfirmation={() => props.toggleConfirmationAt(index)} />
    )}
  </ul>;

  GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired
  };

export default GuestList;
