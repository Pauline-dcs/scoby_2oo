const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", (req, res, next) => {
    Item.find({})
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
}); 

router.get("/:id", (req, res, next) => {
    Item.findById(req.params.id)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
});


// A verifier

router.post("/", (req, res, next) => {
    const { name, description, category, quantity, address, location, timestamps } = req.body; 
    console.log(req.body);

    if (req.file) {
       image = req.file.url;
    } 

    
    Item.create(req.body)
    
})

//Verifier req.body

router.patch("/:id", (req, res, next) => {
    Item.findByIdAndUpdate(req.body, req.params.id, { new: true })
     .then((dbRes) => {
             res.status(200).json(dbRes)
         })
         .catch((error) => {
             res.status(500).json(error)
         })
    
})

//Delete

router.delete("/:id", (req, res, next) => {
    Item.findByIdAndRemove(req.params.id)
        .then((dbRes) => {
            if (dbRes === null) {
                res.status(404).json({ message: "Item not found" })
            } else {
                res.status(204).json(dbRes)
            }
        })
        
        .catch((error) => {
            res.status(500).json(error)
        })
});

module.exports = router;