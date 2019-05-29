"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const formSchema = new mongoose.Schema({
    loggedInUser: {
        type: String,
        required: false,
        default: ""
    },
    characterName: {
        type: String,
        required: false,
        default: ""
    },
    characterClass: {
        type: String,
        required: false,
        default: ""
    },
    characterLevel: {
        type: Number,
        required: false,
        default: 1
    },
    characterRace: {
        type: String,
        required: false,
        default: ""
    },
    alignment: {
        type: String,
        required: false,
        default: ""
    },
    background: {
        type: String,
        required: false,
        default: ""
    },
    experience: {
        type: String,
        required: false,
        default: ""
    },
    hitPoints: {
        type: String,
        required: false,
        default: ""
    },
    strength: {
        type: String,
        required: false,
        default: ""
    },
    dexterity: {
        type: String,
        required: false,
        default: ""
    },
    insight: {
        type: String,
        required: false,
        default: ""
    },
    constitution: {
        type: String,
        required: false,
        default: ""
    },
    intelligence: {
        type: String,
        required: false,
        default: ""
    },
    gp: {
        type: String,
        required: false,
        default: ""
    },
    acrobatics: {
        type: String,
        required: false,
        default: ""
    },
    animalHandling: {
        type: String,
        required: false,
        default: ""
    },
    arcana: {
        type: String,
        required: false,
        default: ""
    },
    athletics: {
        type: String,
        required: false,
        default: ""
    },
    wisdom: {
        type: String,
        required: false,
        default: ""
    },
    deception: {
        type: String,
        required: false,
        default: ""
    },
    intimidation: {
        type: String,
        required: false,
        default: ""
    },
    investigation: {
        type: String,
        required: false,
        default: ""
    },
    charisma: {
        type: String,
        required: false,
        default: ""
    },
    history: {
        type: String,
        required: false,
        default: ""
    },
    performance: {
        type: String,
        required: false,
        default: ""
    },
    perception: {
        type: String,
        required: false,
        default: ""
    },
    persuasion: {
        type: String,
        required: false,
        default: ""
    },
    medicine: {
        type: String,
        required: false,
        default: ""
    },
    religion: {
        type: String,
        required: false,
        default: ""
    },
    stealth: {
        type: String,
        required: false,
        default: ""
    },
    sleightOfHand: {
        type: String,
        required: false,
        default: ""
    },
    nature: {
        type: String,
        required: false,
        default: ""
    },
    survival: {
        type: String,
        required: false,
        default: ""
    },
    addedToDB: {
        type: Date,
        default: Date.now
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
