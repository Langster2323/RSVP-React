import React from 'react';

const GuestInputForm = props =>
  <form onSubmit={this.newGuestSubmitHandler}>
      <input
      type="text"
      onChange={this.handleNameInput}
      value={this.state.pendingGuest}
      placeholder="Invite Someone" />
      <button type="submit" name="submit" value="submit">Submit</button>
  </form>

export default GuestInputForm;
