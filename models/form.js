"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const formSchema = new mongoose.Schema({
    loggedInUser: {
        type: String,
        required: false,
        default: ""
    },
    firstName: {
        type: String,
        required: false,
        default: ""
    },
    lastName: {
        type: String,
        required: false,
        default: ""
    },
    diagnosis: {
        type: String,
        required: false,
        default: ""
    },
    gestationalAge: {
        type: String,
        required: false,
        default: ""
    },
    correctedGestationalAgeDay: {
        type: Number,
        required: false,
        default: ""
    },
    correctedGestationalAgeWeek: {
        type: Number,
        required: false,
        default: ""
    },
    dayOfLife: {
        type: Number,
        required: false,
        default: ""
    },
    dayOfBirth: {
        type: String,
        required: false,
        default: ""
    },
    timeOfBirth: {
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
    kaiserScore: {
        type: String,
        required: false,
        default: ""
    },
    bloodType: {
        type: String,
        required: false,
        default: ""
    },
    coombs: {
        type: String,
        required: false,
        default: ""
    },
    acuity: {
        type: String,
        required: false,
        default: ""
    },
    bedNumber: {
        type: Number,
        required: false,
        default: ""
    },
    dateOfAdmission: {
        type: String,
        required: false,
        default: ""
    },
    timeOfAdmission: {
        type: String,
        required: false,
        default: ""
    },
    dateOfDischarge: {
        type: String,
        required: false,
        default: ""
    },
    timeOfDischarge: {
        type: String,
        required: false,
        default: ""
    },
    gravida: {
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
    vagCs: {
        type: String,
        required: false,
        default: ""
    },
    apgar1: {
        type: String,
        required: false,
        default: ""
    },
    apgar2: {
        type: String,
        required: false,
        default: ""
    },
    rom: {
        type: Number,
        required: false,
        default: ""
    },
    hx: {
        type: String,
        required: false,
        default: ""
    },
    maternalBloodType: {
        type: String,
        required: false,
        default: ""
    },
    husCheck: {
        type: String,
        required: false,
        default: ""
    },
    husText: {
        type: String,
        required: false,
        default: ""
    },
    respiratoryOptions: {
        type: String,
        required: false,
        default: ""
    },

    respiratoryText: {
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
    labsTestsText: {
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
    troughText: {
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
    eyeExamText: {
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
    drugInput: {
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
    tDrugInput: {
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
    drugNotes: {
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
    historyChanges: {
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
