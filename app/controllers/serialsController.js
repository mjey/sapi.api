const express = require('express');
const router = express.Router();
const Serial = require('../models/serialsModel');

// Get all serials
const getSerials =  async (req, res) => {
    // try {
        const serials = await Serial.findAll();
        res.json(serials);
    // } catch (error) {
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
};

// Get a serial by id
const getSerialById = async (req, res) => {
    const { id } = req.params;
    try {
        const serial = await Serial.findOne({ where: { id: id } });
        if (serial) {
            res.json(serial);
        } else {
            res.status(404).json({ error: 'Serial not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Create a new serial
const createSerial =  async (req, res) => {
    const data = req.body;
    try {
        const serial = await Serial.create(data);
        res.status(201).json(serial);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a serial
const updateSerial = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const [updated] = await Serial.update(data, { where: { id: id } });
        if (updated) {
            const updatedSerial = await Serial.findOne({ where: { id: id } });
            res.json(updatedSerial);
        } else {
            res.status(404).json({ error: 'Serial not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a serial
const deleteSerial = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Serial.destroy({ where: { id: id } });
        if (deleted) {
            res.json({ message: 'Serial deleted' });
        } else {
            res.status(404).json({ error: 'Serial not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {
    createSerial,
    getSerials,
    getSerialById,
    updateSerial,
    deleteSerial
};