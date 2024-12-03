//Creo le rotte della risorsa ricette
const express = require("express");
const arrayRicette = require("../data");
const router = express.Router();
console.log(router);

//INDEX endpoint
router.get("/", (req, res) => {
    res.json(arrayRicette);
});

//SHOW! GET
router.get("/:id", (req, res) => {
    const ricetteId = req.params.id;
    // res.json("Leggiamo solo UN determinato dato " + ricetteId);
    res.json(arrayRicette[ricetteId]);
});

//CREATE! USA POST!
router.post("/", (req, res) => {
    res.json("Creiamo un NUOVO elemento!");
});

//UPDATE!!!! PUT
router.put("/:id", (req, res) => {
    res.json("Modifica tutti i dati dell'elemento!");
});

//MODIFY - modifica nel DETTAGLIO un elemento, PATCH
router.patch("/:id", (req, res) => {
    const ricetteId = req.params.id;
    res.json("Qui modifichiamo gli specifici dati di uno specifico elemento " + ricetteId);
});

//DESTROYY!!! DELETE
router.delete("/:id", (req, res) => {
    const ricetteId = req.params.id;
    res.json("Eliminiamo l'elemento numero..." + ricetteId);
});


module.exports = router;