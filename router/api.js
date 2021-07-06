const express = require('express');
const router = express.Router();
const districtmodel = require('../model/states').districtmodel;
const VaccinationRaj = require('../model/states').VaccinationRaj;
const VaccinationSikkim = require('../model/states').VaccinationSikkim;
const VaccinationTamilNadu = require('../model/states').VaccinationTamilNadu;
const VaccinationWest = require('../model/states').VaccinationWest;
const VaccinationTelangana = require('../model/states').VaccinationTelangana;
const VaccinationUttarPardesh = require('../model/states').VaccinationUttarPardesh;
const VaccinationPunjab = require('../model/states').VaccinationPunjab;
router.get('/raj', function (req, res, next) {

    VaccinationRaj.find({}).then(function (data) {
        console.log(data);
        res.json(data);

    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});

router.get('/sikkim', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    VaccinationSikkim.find({}).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});

router.get('/up', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    VaccinationUttarPardesh.find({}).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});
router.get('/tamil', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    VaccinationTamilNadu.find({}).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});

router.get('/telangana', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    VaccinationTelangana.find({}).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});
router.get('/west', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    VaccinationWest.find({}).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});

router.get('/Punjab', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    VaccinationPunjab.find({}).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});





router.get('/state', function (req, res, next) {
    let state = req.query.state;
    console.log(state);
    districtmodel.findOne({ state: state }).then(function (data) {
        res.json(data);
    }).catch(function (error) {
        console.log(error)
        res.json(error)
    })
});

module.exports = router