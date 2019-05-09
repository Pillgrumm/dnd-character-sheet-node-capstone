'use strict';

const User = require('./models/users');
const Form = require('./models/form');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const app = express();


app.use(cors());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.Promise = global.Promise;


//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/public/index.html');
//});



// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server;

function runServer(databaseUrl) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                    console.log(`Listening on localhost:${config.PORT}`);
                    resolve();
                })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}


if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}


function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

// ---------------USER ENDPOINTS------------------------------

// GET
// Check for duplicate email in database for user sign up
app.get('/check-duplicate-email/:inputEmail', (req, res) => {
    let inputEmail = req.params.inputEmail;
    User
        .find({
            "email": inputEmail
        })
        .then(function (entries) {
            res.json({
                entries
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
})


// POST
// Create a new user

app.post('/users/create', (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error on genSalt'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error on hash'
                });
            }

            User.create({
                email,
                password: hash,
                username
            }, (err, item) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Error on Create User'
                    });
                }
                if (item) {
                    console.log(`New user with email ${email} was created`);
                    return res.status(200).json(item);
                }
            });
        });
    });

});


// User log in
app.post('/signin', function (req, res) {
    User
        .findOne({
            username: req.body.username
        }, function (err, items) {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            if (!items) {
                //bad email
                return res.status(401).json({
                    message: "Not found"
                });
            } else {
                items.validatePassword(req.body.password, function (err, isValid) {
                    if (err) {
                        console.log('There was an error validating email or password.');
                    }
                    if (!isValid) {
                        return res.status(401).json({
                            message: "Not found"
                        });
                    } else {
                        console.log("user logged in successfully");
                        return res.json(items);
                    }
                });
            };
        });
});

// POST
// Add General Information

// POST
// Add a session

//Patient
app.post('/form/create', (req, res) => {


    Form.create({
        loggedInUser: req.body.loggedInUser,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        diagnosis: req.body.diagnosis,
        gestationalAge: req.body.gestationalAge,
        correctedGestationalAgeDay: req.body.correctedGestationalAgeDay,
        correctedGestationalAgeWeek: req.body.correctedGestationalAgeWeek,
        dayOfLife: req.body.dayOfLife,
        dayOfBirth: req.body.dayOfBirth,
        timeOfBirth: req.body.timeOfBirth,
        birthWeight: req.body.birthWeight,
        currentWeight: req.body.currentWeight,
        kaiserScore: req.body.kaiserScore,
        bloodType: req.body.bloodType,
        coombs: req.body.coombs,
        acuity: req.body.acuity,
        bedNumber: req.body.bedNumber,
        dateOfAdmission: req.body.dateOfAdmission,
        timeOfAdmission: req.body.timeOfAdmission,
        dateOfDischarge: req.body.dateOfDischarge,
        timeOfDischarge: req.body.timeOfDischarge,
        gravida: req.body.gravida,
        para: req.body.para,
        age: req.body.age,
        vagCs: req.body.vagCs,
        apgar1: req.body.apgar1,
        apgar2: req.body.apgar2,
        rom: req.body.rom,
        hx: req.body.hx,
        maternalBloodType: req.body.maternalBloodType,
        husCheck: req.body.husCheck,
        husText: req.body.husText,
        respiratoryOptions: req.body.respiratoryOptions,
        respiratoryText: req.body.respiratoryText,
        fio2: req.body.fio2,
        abdpb: req.body.abdpb,
        murmur: req.body.murmur,
        echo: req.body.echo,
        cardiacResults: req.body.cardiacResults,
        meds: req.body.meds,
        cbc: req.body.cbc,
        tb: req.body.tb,
        bmp: req.body.bmp,
        crp: req.body.crp,
        tg: req.body.tg,
        labsTestsText: req.body.labsTestsText,
        qtuLabs: req.body.qtuLabs,
        troughCheck: req.body.troughCheck,
        troughText: req.body.troughText,
        dateOfTrough: req.body.dateOfTrough,
        timeOfTrough: req.body.timeOfTrough,
        cxrCheck: req.body.cxrCheck,
        cxrDate: req.body.cxrDate,
        kubCheck: req.body.kubCheck,
        kubDate: req.body.kubDate,
        radiologyText: req.body.radiologyText,
        hepBDate: req.body.hepBDate,
        newbornScreenDate: req.body.newbornScreenDate,
        cchdEchoText: req.body.cchdEchoText,
        eyeExamDate: req.body.eyeExamDate,
        eyeExamText: req.body.eyeExamText,
        fuDate: req.body.fuDate,
        hearingCheck: req.body.hearingCheck,
        carSeatCheck: req.body.carSeatCheck,
        cprCheck: req.body.cprCheck,
        circCheck: req.body.circCheck,
        pivCheck: req.body.pivCheck,
        piccCheck: req.body.piccCheck,
        uacCheck: req.body.uacCheck,
        uvcCheck: req.body.uvcCheck,
        salineLockCheck: req.body.salineLockCheck,
        drugInput: req.body.drugInput,
        ccDrug: req.body.ccDrug,
        hrDrug: req.body.hrDrug,
        tDrugInput: req.body.tDrugInput,
        ccTDrug: req.body.ccTDrug,
        hrTDrug: req.body.hrTDrug,
        ccIl: req.body.ccIl,
        hrIl: req.body.hrIl,
        drugNotes: req.body.drugNotes,
        feedingMethod: req.body.feedingMethod,
        adLib: req.body.adLib,
        cueBased: req.body.cueBased,
        fiCC: req.body.fiCC,
        hrCC: req.body.hrCC,
        feedingAttempts: req.body.feedingAttempts,
        completedAttempts: req.body.completedAttempts,
        planOfCare: req.body.planOfCare,
        socialConsiderations: req.body.socialConsiderations,
        historyChanges: req.body.historyChanges,
        referalls: req.body.referalls,
        synagis: req.body.synagis,
        vaccine: req.body.vaccine,
        pediatrician: req.body.pediatrician,
        lastBath: req.body.lastBath,
        consent: req.body.consent,
        husCP: req.body.husCP,
        cpDate: req.body.cpDate,
        cpTime: req.body.cpTime,
        phototherapyStartDate: req.body.phototherapyStartDate,
        phototherapyEndDate: req.body.phototherapyEndDate,
        phototherapySelect: req.body.phototherapySelect
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: err
            });
        }
        if (item) {
            return res.json(item);
        }
    });
});



app.put('/form/update/:id', function (req, res) {
    let toUpdate = {};
    let updateableFields = ['loggedInUser', 'firstName', 'lastName', 'diagnosis', 'gestationalAge', 'correctedGestationalAgeDay', 'correctedGestationalAgeWeek', 'dayOfLife', 'dayOfBirth', 'timeOfBirth', 'birthWeight', 'currentWeight', 'kaiserScore', 'bloodType', 'coombs', 'acuity', 'bedNumber', 'dateOfAdmission', 'timeOfAdmission', 'dateOfDischarge', 'timeOfDischarge', 'gravida', 'para', 'age', 'vagCs', 'apgar1', 'apgar2', 'rom', 'hx', 'maternalBloodType', 'husCheck', 'husText', 'respiratoryOptions', 'respiratoryText', 'fio2', 'abdpb', 'murmur', 'echo', 'cardiacResults', 'meds', 'cbc', 'tb', 'bmp', 'crp', 'tg', 'labsTestsText', 'qtuLabs', 'troughCheck', 'troughText', 'dateOfTrough', 'timeOfTrough', 'cxrCheck', 'cxrDate', 'kubCheck', 'kubDate', 'radiologyText', 'hepBDate', 'newbornScreenDate', 'cchdEchoText', 'eyeExamDate', 'eyeExamText', 'fuDate', 'hearingCheck', 'carSeatCheck', 'cprCheck', 'circCheck', 'pivCheck', 'piccCheck', 'uacCheck', 'uvcCheck', 'salineLockCheck', 'drugInput', 'ccDrug', 'hrDrug', 'tDrugInput', 'ccTDrug', 'hrTDrug', 'ccIl', 'hrIl', 'drugNotes', 'feedingMethod', 'adLib', 'cueBased', 'fiCC', 'hrCC', 'feedingAttempts', 'completedAttempts', 'planOfCare', 'socialConsiderations', 'historyChanges', 'referalls', 'synagis', 'vaccine', 'pediatrician', 'lastBath', 'consent', 'husCP', 'cpDate', 'cpTime', 'phototherapyStartDate', 'phototherapyEndDate', 'phototherapySelect'];
    updateableFields.forEach(function (field) {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });
    Form
        .findByIdAndUpdate(req.params.id, {
            $set: toUpdate
        }).exec().then(function (achievement) {
            return res.status(204).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});


app.post('/form/create', (req, res) => {


    Form.create({
        loggedInUser: req.body.loggedInUser,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        diagnosis: req.body.diagnosis,
        gestationalAge: req.body.gestationalAge,
        correctedGestationalAgeDay: req.body.correctedGestationalAgeDay,
        correctedGestationalAgeWeek: req.body.correctedGestationalAgeWeek,
        dayOfLife: req.body.dayOfLife,
        dayOfBirth: req.body.dayOfBirth,
        timeOfBirth: req.body.timeOfBirth,
        birthWeight: req.body.birthWeight,
        currentWeight: req.body.currentWeight,
        kaiserScore: req.body.kaiserScore,
        bloodType: req.body.bloodType,
        coombs: req.body.coombs,
        acuity: req.body.acuity,
        bedNumber: req.body.bedNumber,
        dateOfAdmission: req.body.dateOfAdmission,
        timeOfAdmission: req.body.timeOfAdmission,
        dateOfDischarge: req.body.dateOfDischarge,
        timeOfDischarge: req.body.timeOfDischarge,
        gravida: req.body.gravida,
        para: req.body.para,
        age: req.body.age,
        vagCs: req.body.vagCs,
        apgar1: req.body.apgar1,
        apgar2: req.body.apgar2,
        rom: req.body.rom,
        hx: req.body.hx,
        maternalBloodType: req.body.maternalBloodType,
        husCheck: req.body.husCheck,
        husText: req.body.husText,
        respiratoryOptions: req.body.respiratoryOptions,
        respiratoryText: req.body.respiratoryText,
        fio2: req.body.fio2,
        abdpb: req.body.abdpb,
        murmur: req.body.murmur,
        echo: req.body.echo,
        cardiacResults: req.body.cardiacResults,
        meds: req.body.meds,
        cbc: req.body.cbc,
        tb: req.body.tb,
        bmp: req.body.bmp,
        crp: req.body.crp,
        tg: req.body.tg,
        labsTestsText: req.body.labsTestsText,
        qtuLabs: req.body.qtuLabs,
        troughCheck: req.body.troughCheck,
        troughText: req.body.troughText,
        dateOfTrough: req.body.dateOfTrough,
        timeOfTrough: req.body.timeOfTrough,
        cxrCheck: req.body.cxrCheck,
        cxrDate: req.body.cxrDate,
        kubCheck: req.body.kubCheck,
        kubDate: req.body.kubDate,
        radiologyText: req.body.radiologyText,
        hepBDate: req.body.hepBDate,
        newbornScreenDate: req.body.newbornScreenDate,
        cchdEchoText: req.body.cchdEchoText,
        eyeExamDate: req.body.eyeExamDate,
        eyeExamText: req.body.eyeExamText,
        fuDate: req.body.fuDate,
        hearingCheck: req.body.hearingCheck,
        carSeatCheck: req.body.carSeatCheck,
        cprCheck: req.body.cprCheck,
        circCheck: req.body.circCheck,
        pivCheck: req.body.pivCheck,
        piccCheck: req.body.piccCheck,
        uacCheck: req.body.uacCheck,
        uvcCheck: req.body.uvcCheck,
        salineLockCheck: req.body.salineLockCheck,
        drugInput: req.body.drugInput,
        ccDrug: req.body.ccDrug,
        hrDrug: req.body.hrDrug,
        tDrugInput: req.body.tDrugInput,
        ccTDrug: req.body.ccTDrug,
        hrTDrug: req.body.hrTDrug,
        ccIl: req.body.ccIl,
        hrIl: req.body.hrIl,
        drugNotes: req.body.drugNotes,
        feedingMethod: req.body.feedingMethod,
        adLib: req.body.adLib,
        cueBased: req.body.cueBased,
        fiCC: req.body.fiCC,
        hrCC: req.body.hrCC,
        feedingAttempts: req.body.feedingAttempts,
        completedAttempts: req.body.completedAttempts,
        planOfCare: req.body.planOfCare,
        socialConsiderations: req.body.socialConsiderations,
        historyChanges: req.body.historyChanges,
        referalls: req.body.referalls,
        synagis: req.body.synagis,
        vaccine: req.body.vaccine,
        pediatrician: req.body.pediatrician,
        lastBath: req.body.lastBath,
        consent: req.body.consent,
        husCP: req.body.husCP,
        cpDate: req.body.cpDate,
        cpTime: req.body.cpTime,
        phototherapyStartDate: req.body.phototherapyStartDate,
        phototherapyEndDate: req.body.phototherapyEndDate,
        phototherapySelect: req.body.phototherapySelect
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: err
            });
        }
        if (item) {
            return res.json(item);
        }
    });
});




// UPDATE
// Update user password
app.put('/user-pw/:id', function (req, res) {
    let password = req.body.pw;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error on genSalt'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error on hash'
                });
            }

            User
                .findByIdAndUpdate(req.params.id, {
                    $set: {
                        password: hash
                    }
                })
                .then((user) => {
                    return res.json(user);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({
                        message: 'Password was not modified'
                    });
                });
        });
    });
});

app.get('/get-all-entries/:userId', function (req, res) {

    Form
        .find({
            loggedInUser: req.params.userId
        })
        .sort('-addedToDB')
        .then(function (entries) {
            res.json({
                entries
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});
app.get('/get-entry-by-id/:selectedEntryID', function (req, res) {

    Form
        .find({
            _id: req.params.selectedEntryID
        })
        .then(function (entries) {
            res.json({
                entries
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// DELETE
// Delete Entry
app.delete('/delete-entry/:id', (req, res) => {
    Form
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end();
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error deleting entry'
            })
        });
});

// ---------------MISC------------------------------
// catch-all endpoint if client makes request to non-existent endpoint
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;
