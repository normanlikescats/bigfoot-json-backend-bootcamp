class SightingsRouter {
  constructor(express, sightingsController){
    this.express = express;
    this.controller = sightingsController;
  }

  routes =()=>{
    const router = this.express.Router();

    router.get("/", this.controller.getSightings.bind(this.controller))
    router.get("/:sightingsIndex", this.controller.getIndividualSighting.bind(this.controller))
    return router
  }
}

module.exports = SightingsRouter;