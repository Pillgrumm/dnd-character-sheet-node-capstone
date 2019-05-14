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
        type: String,
        required: false,
        default: ""
    },
    characterRace: {
        type: String,
        required: false,
        default: ""
    },
    alignment: {
        type: Number,
        required: false,
        default: ""
    },
    background: {
        type: Number,
        required: false,
        default: ""
    },
    experience: {
        type: Number,
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
    birthWeight: {
        type: Number,
        required: false,
        default: ""
    },
    currentWeight: {
        type: Number,
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
        type: Number,
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
        type: Number,
        required: false,
        default: ""
    },
    para: {
        type: Number,
        required: false,
        default: ""
    },
    age: {
        type: Number,
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
    rom: {
        type: Number,
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
    husCheck: {
        type: String,
        required: false,
        default: ""
    },
    performance: {
        type: String,
        required: false,
        default: ""
    },
    respiratoryOptions: {
        type: String,
        required: false,
        default: ""
    },

    perception: {
        type: String,
        required: false,
        default: ""
    },
    fio2: {
        type: Number,
        required: false,
        default: ""
    },
    abdpb: {
        type: String,
        required: false,
        default: ""
    },
    murmur: {
        type: String,
        required: false,
        default: ""
    },
    echo: {
        type: String,
        required: false,
        default: ""
    },
    cardiacResults: {
        type: String,
        required: false,
        default: ""
    },
    meds: {
        type: String,
        required: false,
        default: ""
    },
    labsTests: {
        type: String,
        required: false,
        default: ""
    },
    cbc: {
        type: String,
        required: false,
        default: ""
    },
    tb: {
        type: String,
        required: false,
        default: ""
    },
    bmp: {
        type: String,
        required: false,
        default: ""
    },
    crp: {
        type: String,
        required: false,
        default: ""
    },
    tg: {
        type: String,
        required: false,
        default: ""
    },
    persuasion: {
        type: String,
        required: false,
        default: ""
    },
    qtuLabs: {
        type: String,
        required: false,
        default: ""
    },
    troughCheck: {
        type: String,
        required: false,
        default: ""
    },
    medicine: {
        type: String,
        required: false,
        default: ""
    },
    dateOfTrough: {
        type: String,
        required: false,
        default: ""
    },
    timeOfTrough: {
        type: String,
        required: false,
        default: ""
    },
    cxrCheck: {
        type: String,
        required: false,
        default: ""
    },
    cxrDate: {
        type: String,
        required: false,
        default: ""
    },
    kubCheck: {
        type: String,
        required: false,
        default: ""
    },
    kubDate: {
        type: String,
        required: false,
        default: ""
    },
    radiologyText: {
        type: String,
        required: false,
        default: ""
    },
    hepBDate: {
        type: String,
        required: false,
        default: ""
    },
    newbornScreenDate: {
        type: String,
        required: false,
        default: ""
    },
    cchdEchoText: {
        type: String,
        required: false,
        default: ""
    },
    eyeExamDate: {
        type: String,
        required: false,
        default: ""
    },
    religion: {
        type: String,
        required: false,
        default: ""
    },
    fuDate: {
        type: String,
        required: false,
        default: ""
    },
    hearingCheck: {
        type: String,
        required: false,
        default: ""
    },
    carSeatCheck: {
        type: String,
        required: false,
        default: ""
    },
    cprCheck: {
        type: String,
        required: false,
        default: ""
    },
    circCheck: {
        type: String,
        required: false,
        default: ""
    },
    pivCheck: {
        type: String,
        required: false,
        default: ""
    },
    piccCheck: {
        type: String,
        required: false,
        default: ""
    },
    uacCheck: {
        type: String,
        required: false,
        default: ""
    },
    uvcCheck: {
        type: String,
        required: false,
        default: ""
    },
    salineLockCheck: {
        type: String,
        required: false,
        default: ""
    },
    stealth: {
        type: String,
        required: false,
        default: ""
    },
    ccDrug: {
        type: String,
        required: false,
        default: ""
    },
    hrDrug: {
        type: String,
        required: false,
        default: ""
    },
    sleightOfHand: {
        type: String,
        required: false,
        default: ""
    },
    ccTDrug: {
        type: String,
        required: false,
        default: ""
    },
    hrTDrug: {
        type: String,
        required: false,
        default: ""
    },
    ccIl: {
        type: String,
        required: false,
        default: ""
    },
    hrIl: {
        type: String,
        required: false,
        default: ""
    },
    nature: {
        type: String,
        required: false,
        default: ""
    },
    feedingMethod: {
        type: String,
        required: false,
        default: ""
    },
    adLib: {
        type: String,
        required: false,
        default: "",
        default: ""
    },
    cueBased: {
        type: String,
        required: false,
        default: ""
    },
    fiCC: {
        type: String,
        required: false,
        default: ""
    },
    hrCC: {
        type: String,
        required: false,
        default: ""
    },
    feedingAttempts: {
        type: String,
        required: false,
        default: ""
    },
    completedAttempts: {
        type: String,
        required: false,
        default: ""
    },
    planOfCare: {
        type: String,
        required: false,
        default: ""
    },
    socialConsiderations: {
        type: String,
        required: false,
        default: ""
    },
    survival: {
        type: String,
        required: false,
        default: ""
    },
    referalls: {
        type: String,
        required: false,
        default: ""
    },
    synagis: {
        type: String,
        required: false,
        default: ""
    },
    vaccine: {
        type: String,
        required: false,
        default: ""
    },
    pediatrician: {
        type: String,
        required: false,
        default: ""
    },
    lastBath: {
        type: String,
        required: false,
        default: ""
    },
    consent: {
        type: String,
        required: false,
        default: ""
    },
    husCP: {
        type: String,
        required: false,
        default: ""
    },
    cpDate: {
        type: String,
        required: false,
        default: ""
    },
    cpTime: {
        type: String,
        required: false,
        default: ""
    },
    phototherapyStartDate: {
        type: String,
        required: false,
        default: ""
    },
    phototherapyEndDate: {
        type: String,
        required: false,
        default: ""
    },
    phototherapySelect: {
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
