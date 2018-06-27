import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <p>Reserve App</p>
    <form onSubmit={this.newGuestSubmitHandler}>
        <input
        type="text"
        onChange={this.handleNameInput}
        value={this.state.pendingGuest}
        placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  </header>

  export default Header;
