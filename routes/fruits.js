const express = require("express")
const fruitsRouter = express.Router() //create route handler
const fruits = require("../controllers/fruits")

//specify end points which attach to contollers

fruitsRouter.get("/", fruits.index)
fruitsRouter.get("/:name", fruits.show)
fruitsRouter.post("/", fruits.create)
fruitsRouter.patch("/:name", fruits.update)
fruitsRouter.delete("/:name", fruits.destroy)




module.exports = fruitsRouter