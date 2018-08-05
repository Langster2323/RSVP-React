import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = ({ newGuestSubmitHandler, pendingGuest, handleNameInput }) =>
  <header>
    <h1>RSVP</h1>
    <p>Reserve App</p>
    <GuestInputForm
    newGuestSubmitHandler={newGuestSubmitHandler}
    pendingGuest={pendingGuest}
    handleNameInput={handleNameInput} />
  </header>

  Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  };

  export default Header;
