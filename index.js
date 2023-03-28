const cors = require('cors')
const express = require('express');
const SightingsController = require('./controllers/SightingsController');
const SightingsRouter = require('./routers/SightingsRouter');
require('dotenv').config()

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

const sightingsController = new SightingsController();
const sightingsRouter = new SightingsRouter(express, sightingsController);

app.use("/sightings", sightingsRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
