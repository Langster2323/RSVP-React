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
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        removeGuestAt={this.removeGuestAt}
        pendingGuest={this.state.pendingGuest} />
      </div>
    );
  }
}

export default App;
