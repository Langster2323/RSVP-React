import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {
//Property initializer...
state = {
  guests: [
    {
      name: 'Treasure',
      isConfirmed: false
    },
    {
      name: 'Keem',
      isConfirmed: true
    }
  ]
}

//Returns the length of the guest array in the state object...
getTotalInvited = () => this.state.guests.length;

//getAttendingGuests = () =>
//getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>Reserve App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who have not responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList />
        </div>
      </div>
    );
  }
}

export default App;
