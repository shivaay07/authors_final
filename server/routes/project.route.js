const MyController = require("../controllers/project.controller")

module.exports =(app)=>{
    app.get("/api/path",MyController.findAll);
    app.get("/api/path/:id",MyController.findOne);
    app.post("/api/path",MyController.create);
    app.put("/api/path/:id",MyController.update);
    app.delete("/api/path/:id",MyController.delete);
}