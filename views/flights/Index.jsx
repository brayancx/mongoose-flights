const React = require('react');

class Index extends React.Component {
    render() {
        const { flights } = this.props
        return(
            <div>
                <h1>ALL OF MY FLIGHTS</h1>
                <ul>
                    {flights.map((flight, i) => {
                        return(
                            <li key={i}>
                                <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                                <br></br>
                                <a href={`/flights/${flight._id}`}>{flight.flightNo}</a>
                                <br></br>
                                <a href={`/flights/${flight._id}`}>{flight.departs.toISOString().slice(0, 16)}</a>
                                <br></br>
                            </li>
                        )
                    })}
                </ul>
                <button>
          <a href="flights/new" style={{ textDecoration: "none" }}>
            Add Flight
          </a>
        </button>
            </div>
        )
    }
}

module.exports = Index