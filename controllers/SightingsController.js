const { getSightings } = require('../utils.js')

class SightingsController{
  constructor(){
    this.sightingsArr = [];
  }

  getSightings=(req, res)=>{
    getSightings().then((data)=>{
      res.json(data)
    });
  }

  getIndividualSighting=(req,res)=>{
    getSightings().then((data)=>{
      res.json(data[req.params.sightingsIndex])
    });
  }
}

module.exports = SightingsController