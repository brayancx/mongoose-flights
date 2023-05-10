require("dotenv").config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const { connect, connection } = require('mongoose')
const Flight = require('./models/flight')
const Destination = require('./models/destination')
const methodOverride = require('method-override')

// Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connection.once('open', () => {
  console.log('connected to mongo')
})

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

//mongo connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// View Engine Middleware 
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
app.set('views', './views');

// Custom Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

app.use(methodOverride('_method'));
app.use(express.static("public"))

//index
app.get("/flights", async (req, res) => {
    try {
      const foundFlight = await Flight.find({});
      res.render("flights/Index", { flights: foundFlight });
    } catch (err) {
      res.status(400).send(err);
    }
  });

// New form
app.get("/flights/new", (req, res) => {
    res.render("flights/New");
  });

// Create
app.post('/flights', async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body)
    res.redirect('/flights')
  } catch(err) {
    res.status(400).send(err)
  }  
})

// Create
app.post('/destinations/:id', async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body)
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id,
      {$addToSet: {destinations: newDestination._id}},
      {new: true})
      res.redirect(`/flights/${req.params.id}`)
    
  } catch(err) {
    res.status(400).send(err)
  }
})

app.get("/flights/:id", async (req, res) => {
    try {
      const foundFlight = await Flight.findById(req.params.id).populate(
        "destinations"
      );
      res.render("flights/Show", {
        flight: foundFlight,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  app.get("/*", (req, res) => {
    res.redirect("/flights");
  });
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });