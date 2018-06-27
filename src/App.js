import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
//Property initializer...
state = {
  isFiltered: false,
  pendingGuest: "",
  guests: []
};
//Fixing filter bug...
lastGuestId = 0;

newGuestId = () => {
  const id = this.lastGuestId;
  this.lastGuestId += 1;
  return id;
};
//Example of a reducer...
toggleGuestProperty = (property, id) =>
  this.setState({
    guests: this.state.guests.map(guest => {
      if (id === guest.id) {
        return {
          ...guest,
          [property]: !guest[property]
        };
      }
      return guest;
    })
  });

toggleConfirmation = id =>
  this.toggleGuestProperty("isConfirmed", id);

  removeGuest = id =>
  this.setState({
    guests: this.state.guests.filter(guest => id !== guest.id)
  });

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  setName = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
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
      const id = this.newGuestId();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false
            id
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
      <Header
      pendingGuest={this.state.pendingGuest}
      newGuestSubmitHandler={this.newGuestSubmitHandler}
      handleNameInput={this.handleNameInput} />
        <MainContent
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalInvited={this.totalInvited}
        numberAttending={this.numberAttending}
        numberUnconfirmed={this.numberUnconfirmed}
        guests={this.state.guests}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        removeGuest={this.removeGuest}
        pendingGuest={this.state.pendingGuest}
        newGuestId={this.newGuestId} />
      </div>
    );
  }
}

export default App;
