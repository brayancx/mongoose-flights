const React = require("react");
const app = {
  width: "200%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "red",
};

class New extends React.Component {
  render() {
    return (
      <div style={app}>
        <h1>Add a Flight!</h1>
        <form action="/flights" method="POST">
          Airline: <input type="radio" value="American" name="airline" />
          <label>American</label>
          <input type="radio" value="Southwest" name="airline" />
          <label>Southwest</label>
          <input type="radio" value="United" name="airline" />
          <label>United</label>
          <br />
          Flight No: <input type="number" name="flightNo" />
          <br />
          Departs: <input type="datetime-local" name="departs" />
          <br />
          Airport:
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <input type="submit" value="Get Flight" />
          <button>
            <a href="/flights" style={{ textDecoration: `bold` }}>
              Back to Main
            </a>
          </button>
        </form>
      </div>
    );
  }
}

module.exports = New;