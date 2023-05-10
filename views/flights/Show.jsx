const React = require("react");
const app = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    return (
      <div style={app}>
        <h2>Details: {flight.id}</h2>
        <div>Airline: {flight.airline}</div>
        <div>Flight Number: {flight.flightNo}</div>
        <div>Departs: {flight.departs.toISOString().slice(0, 16)}</div>
        Arrival Airports:
        <div>
          {flight.destinations.map((destination) => {
            return (
              <div>
                Airport:{destination.airport} <br />
                Time: {destination.arrival.toISOString().slice(0, 16)}
              </div>
            );
          })}
        </div>
        <form action={`/destinations/${flight._id}`} method="POST">
          Arrival Aiport:
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          Arrival Date:
          <input type="datetime-local" name="arrival" />
          <input type="submit" value="Update Flight" />
        </form>
        <button>
          <a href="/" style={{ textDecoration: `none` }}>
            Back to Main
          </a>
        </button>
      </div>
    );
  }
}

module.exports = Show;