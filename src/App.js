import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {
//Property initializer...
state = {
  isFiltered: false,
  pendingGuest: "",
  guests: [
    {
      name: 'Treasure',
      isConfirmed: false,
      isEditing: false
    },
    {
      name: 'Keem',
      isConfirmed: true,
      isEditing: false
    },
    {
      name: 'Don',
      isConfirmed: true,
      isEditing: true
    }
  ]
};
//Example of a reducer...
toggleGuestPropertyAt = (property, indexToChange) =>
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if (index === indexToChange) {
        return {
          ...guest,
          [property]: !guest[property]
        };
      }
      return guest;
    })
  });

toggleConfirmationAt = index =>
  this.toggleGuestPropertyAt("isConfirmed", index);

  removeGuestAt = index =>
  this.setState({
    guests: [
      ...this.state.guests.slice(0, index),
      ...this.state.guests.slice(index + 1)
    ]
  });

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

    toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered});

    handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

    newGuestSubmitHandler = e => {
      e.preventDefault();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false
          },
          ...this.state.guests
        ],
        pendingGuest: ''
      });
    }

//Returns the length of the guest array in the state object...
getTotalInvited = () => this.state.guests.length;

getAttendingGuests = () => this.state.guests.reduce(
  (total, guest) => guest.isConfirmed ? total + 1 : total,
  0
);

//getUnconfirmedGuests = () =>

  render() {
    const totalInvited= this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
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
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
              type="checkbox"
              onChange={this.toggleFilter}
              checked={this.state.isFiltered} /> Hide those who have not responded
            </label>
          </div>
          <Counter
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed} />
          <GuestList
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest} />
        </div>
      </div>
    );
  }
}

export default App;
