// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }


const {flightsModel} = require('../models/Flight.js');
const {v4: uuid} = require('uuid');

// Add/Book Flight
exports.createFlight = async (req, res) => {
    try {
        const {title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        }
        
        flightsModel.push(newFlight);
        res.status(201).json({
            message: 'You have successfully booked a flight',
            flight: newFlight,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Get all Flight
exports.getAllFlight = async (req, res) => {
    try{
        const flight = flightsModel;
        res.status(200).json({
            message: 'List of all flights',
            flight,
        });
    } catch (err) {
        res.status(500).json({message: err});
    }
}

// Get single Flight
exports.getSingleFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = flightsModel.find((flight) => flight.id === id);
        
        res.status(200).json({
            message: `Found flight with info ${id}`,
            flight,
        });
    } catch(err) {
        res.status(500).json({
            message: 'An error occured while getting info for this flight'
        });
    }
}

// Update/Edit Flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = flightsModel.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;

        res.status(500).json({
            message: `Successfully updated flight with id ${id}`,
            flight,
        });
    } catch (err) {
        res.status(500).json({mesaage: err.message});
    }
}

// Delete Flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = flightsModel.find((flight) => flight.id === id);
        flightsModel.splice(flightsModel.indexOf(flight), 1);

        res.status(500).json({
            message: `Successfully deleted flight of id ${id}`,
            flight,
        });
    } catch (err) {
        res.status(500).json({mesaage: err.message});
    }
}
