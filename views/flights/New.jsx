import React, { Component } from 'react'

export default class New extends Component {
    render() {
        return(
            <div>
                <form action="/flights" method="POST">
          Airline:
          <input type="radio" id="American" value="American" name="airline" />
          <label>American</label>
          <input type="radio" id="Southwest" value="Southwest" name="airline" />
          <label>Southwest</label>
          <input type="radio" id="United" value="United" name="airline" />
          <label>United</label>
          <br />
          Add Flight No: <input type="text" name="flightNo" /> <br />
          Add Date: <input type="datetime-local" name="departure" />
          <br />
          <input type="submit" value="Create Flight" />
        </form>
            </div>
        )
    }
}

