// Triggers
function getPreviousEntries(userId) {
    $.ajax({
            type: 'GET',
            url: `/get-all-entries/${userId}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            let htmlOutput = "<option value=''>Add new entry</option>";
            let formattedDataOutput = "";
            for (i = 0; i < result.entries.length; i++) {
                formattedDataOutput = result.entries[i].addedToDB;
                let partsOfDataInput = formattedDataOutput.split('T');
                let dataOutputOnly = partsOfDataInput[0];
                let timeOutputOnly = partsOfDataInput[1];
                let splitDataOutputOnly = dataOutputOnly.split('-');
                let splitTimeOutputOnly = timeOutputOnly.split(':');
                htmlOutput += '<option value="' + result.entries[i]._id + '">' + splitDataOutputOnly[1] + '/' + splitDataOutputOnly[2] + '/' + splitDataOutputOnly[0] + ' ' + splitTimeOutputOnly[0] + ':' + splitTimeOutputOnly[1] + '(UTC)  ' + result.entries[i].firstName + ' ' + result.entries[i].lastName + '</option>';
            }
            $(".previous-entries-dropdown").html(htmlOutput);
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function checkInputByValue(result, fieldName, expectedValue) {
    if (result.entries[0][fieldName] == expectedValue) {
        $("input[value='" + expectedValue + "']").attr("checked", "checked");
    }
}

function prePopulateFormBasedOnEntryID(selectedEntryID) {
    $.ajax({
            type: 'GET',
            url: `/get-entry-by-id/${selectedEntryID}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            $('.logged-in-user').val(result.entries[0].loggedInUser);
            $('.firstName').val(result.entries[0].firstName);
            $('.lastName').val(result.entries[0].lastName);
            $('.diagnosis').val(result.entries[0].diagnosis);
            $('.gestationalAge').val(result.entries[0].gestationalAge);
            $('.correctedGestationalAgeDay').val(result.entries[0].correctedGestationalAgeDay);
            $('.correctedGestationalAgeWeek').val(result.entries[0].correctedGestationalAgeWeek);
            $('.dayOfLife').val(result.entries[0].dayOfLife);
            $('.dayOfBirth').val(result.entries[0].dayOfBirth);
            $('.timeOfBirth').val(result.entries[0].timeOfBirth);
            $('.birthWeight').val(result.entries[0].birthWeight);
            $('.currentWeight').val(result.entries[0].currentWeight);
            $('.kaiserScore').val(result.entries[0].kaiserScore);
            $('.bloodType').val(result.entries[0].bloodType);
            $('.coombs').val(result.entries[0].coombs);
            $('.acuity').val(result.entries[0].acuity);
            $('.bedNumber').val(result.entries[0].bedNumber);
            $('.dateOfAdmission').val(result.entries[0].dateOfAdmission);
            $('.timeOfAdmission').val(result.entries[0].timeOfAdmission);
            $('.dateOfDischarge').val(result.entries[0].dateOfDischarge);
            $('.timeOfDischarge').val(result.entries[0].timeOfDischarge);
            $('.gravida').val(result.entries[0].gravida);
            $('.para').val(result.entries[0].para);
            $('.age').val(result.entries[0].age);
            $('.vagCs').val(result.entries[0].vagCs);
            $('.apgar1').val(result.entries[0].apgar1);
            $('.apgar2').val(result.entries[0].apgar2);
            $('.rom').val(result.entries[0].rom);
            $('.hx').val(result.entries[0].hx);
            checkInputByValue(result, 'husCheck', 'husCheck');
            $('.husText').val(result.entries[0].husText);
            checkInputByValue(result, 'respiratoryOptions', 'RA');
            checkInputByValue(result, 'respiratoryOptions', 'VENT');
            checkInputByValue(result, 'respiratoryOptions', 'HFNC');
            checkInputByValue(result, 'respiratoryOptions', 'VT');
            checkInputByValue(result, 'respiratoryOptions', 'CPAP');
            $('.respiratoryText').val(result.entries[0].respiratoryText);
            $('.fio2').val(result.entries[0].fio2);
            $('.abdpb').val(result.entries[0].abdpb);
            checkInputByValue(result, 'murmur', 'murmur');
            checkInputByValue(result, 'echo', 'echo');
            $('.cardiacResults').val(result.entries[0].cardiacResults);
            $('.meds').val(result.entries[0].meds);
            $('.maternalBloodType').val(result.entries[0].maternalBloodType);
            checkInputByValue(result, 'cbc', 'cbc');
            checkInputByValue(result, 'tb', 'tb');
            checkInputByValue(result, 'bmp', 'bmp');
            checkInputByValue(result, 'crp', 'crp');
            checkInputByValue(result, 'tg', 'tg');
            $('.labsTestsText').val(result.entries[0].labsTestsText);
            $('.qtuLabs').val(result.entries[0].qtuLabs);
            checkInputByValue(result, 'troughCheck', 'troughCheck');
            $('.troughText').val(result.entries[0].troughText);
            $('.dateOfTrough').val(result.entries[0].dateOfTrough);
            $('.timeOfTrough').val(result.entries[0].timeOfTrough);
            checkInputByValue(result, 'cxrCheck', 'cxrCheck');
            $('.cxrDate').val(result.entries[0].cxrDate);
            checkInputByValue(result, 'kubCheck', 'kubCheck');
            $('.kubDate').val(result.entries[0].kubDate);
            $('.radiologyText').val(result.entries[0].radiologyText);
            $('.hepBDate').val(result.entries[0].hepBDate);
            $('.newbornScreenDate').val(result.entries[0].newbornScreenDate);
            $('.cchdEchoText').val(result.entries[0].cchdEchoText);
            $('.eyeExamDate').val(result.entries[0].eyeExamDate);
            $('.eyeExamText').val(result.entries[0].eyeExamText);
            $('.fuDate').val(result.entries[0].fuDate);
            checkInputByValue(result, 'hearingCheck', 'hearingCheck');
            checkInputByValue(result, 'carSeatCheck', 'carSeatCheck');
            checkInputByValue(result, 'cprCheck', 'cprCheck');
            checkInputByValue(result, 'circCheck', 'circCheck');
            checkInputByValue(result, 'pivCheck', 'pivCheck');
            checkInputByValue(result, 'piccCheck', 'piccCheck');
            checkInputByValue(result, 'uacCheck', 'uacCheck');
            checkInputByValue(result, 'uvcCheck', 'uvcCheck');
            checkInputByValue(result, 'salineLockCheck', 'salineLockCheck');
            $('.drugInput').val(result.entries[0].drugInput);
            $('.ccDrug').val(result.entries[0].ccDrug);
            $('.hrDrug').val(result.entries[0].hrDrug);
            $('.tDrugInput').val(result.entries[0].tDrugInput);
            $('.ccTDrug').val(result.entries[0].ccTDrug);
            $('.hrTDrug').val(result.entries[0].hrTDrug);
            $('.ccIl').val(result.entries[0].ccIl);
            $('.hrIl').val(result.entries[0].hrIl);
            $('.drugNotes').val(result.entries[0].drugNotes);
            $('.feedingMethod').val(result.entries[0].feedingMethod);
            checkInputByValue(result, 'adLib', 'adLib');
            checkInputByValue(result, 'cueBased', 'cueBased');
            $('.fiCC').val(result.entries[0].fiCC);
            $('.hrCC').val(result.entries[0].hrCC);
            $('.feedingAttempts').val(result.entries[0].feedingAttempts);
            $('.completedAttempts').val(result.entries[0].completedAttempts);
            $('.planOfCare').val(result.entries[0].planOfCare);
            $('.socialConsiderations').val(result.entries[0].socialConsiderations);
            $('.historyChanges').val(result.entries[0].historyChanges);
            $('.referalls').val(result.entries[0].referalls);
            checkInputByValue(result, 'synagis', 'synagis');
            checkInputByValue(result, 'vaccine', 'vaccine');
            $('.pediatrician').val(result.entries[0].pediatrician);
            $('.lastBath').val(result.entries[0].lastBath);
            checkInputByValue(result, 'consent', 'consent');
            checkInputByValue(result, 'husCP', 'husCP');
            $('.cpDate').val(result.entries[0].cpDate);
            $('.cpTime').val(result.entries[0].cpTime);
            $('.phototherapyStartDate').val(result.entries[0].phototherapyStartDate);
            $('.phototherapyEndDate').val(result.entries[0].phototherapyEndDate);
            $('.phototherapySelect').val(result.entries[0].phototherapySelect);
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

//when the page loads...
$(document).ready(function () {
    //do stuff
    $(".icon-content").hide();
    $(".section-content").hide();
    $(".legend-show").show();
    $(".legend-hide").hide();
    $("#form-delete-button").hide();
});

//button triggers
$(document).on('click', 'input', function (event) {
    $(this).parent().find(".icon-content-info").show();
    $(".icon-content-error").hide();

});

$(document).on('blur', 'input', function (event) {
    $(this).parent().find(".icon-content-info").hide();
    $(this).parent().find(".icon-content-error").show();

});

$(document).on('click', 'select', function (event) {
    event.preventDefault();
    $(this).parent().find(".icon-content-info").show();
    $(".icon-content-error").hide();

});

$(document).on('blur', 'select', function (event) {
    event.preventDefault();
    $(this).parent().find(".icon-content-info").hide();
    $(this).parent().find(".icon-content-error").show();

});

$(document).on('click', '.legend-show', function (event) {
    event.preventDefault();
    $(this).parent().find(".legend-show").hide();
    $(this).parent().find(".legend-hide").show();
    $(this).parent().parent().find(".section-content").show();
});

$(document).on('change', '.previous-entries-dropdown', function (event) {
    event.preventDefault();
    let selectedEntryID = $(".previous-entries-dropdown").val();
    $(".selected-entry-id").val(selectedEntryID);
    if (selectedEntryID != "") {
        prePopulateFormBasedOnEntryID(selectedEntryID);
        $("#form-delete-button").show();

    } else {
        $("#form-delete-button").hide();
        $('.selected-entry-id').val("");
        $('.firstName').val("");
        $('.lastName').val("");
        $('.diagnosis').val("");
        $('.gestationalAge').val("");
        $('.correctedGestationalAgeDay').val("");
        $('.correctedGestationalAgeWeek').val("");
        $('.dayOfLife').val("");
        $('.dayOfBirth').val("");
        $('.timeOfBirth').val("");
        $('.birthWeight').val("");
        $('.currentWeight').val("");
        $('.kaiserScore').val("");
        $('.bloodType').val("");
        $('.coombs').val("");
        $('.acuity').val("");
        $('.bedNumber').val("");
        $('.dateOfAdmission').val("");
        $('.timeOfAdmission').val("");
        $('.dateOfDischarge').val("");
        $('.timeOfDischarge').val("");
        $('.gravida').val("");
        $('.para').val("");
        $('.age').val("");
        $('.vagCs').val("");
        $('.apgar1').val("");
        $('.apgar2').val("");
        $('.rom').val("");
        $('.hx').val("");
        $("input[name='husCheck']:checked").attr({
            checked: false
        });
        $('.husText').val("");
        $("input[name='respiratory']:checked").attr({
            checked: false
        });
        $('.respiratoryText').val("");
        $('.fio2').val("");
        $('.abdpb').val("");
        $("input[name='murmur']:checked").attr({
            checked: false
        });
        $("input[name='echo']:checked").attr({
            checked: false
        });
        $('.cardiacResults').val("");
        $('.meds').val("");
        $('.maternalBloodType').val("");
        $("input[name='cbc']:checked").attr({
            checked: false
        });
        $("input[name='tb']:checked").attr({
            checked: false
        });
        $("input[name='bmp']:checked").attr({
            checked: false
        });
        $("input[name='crp']:checked").attr({
            checked: false
        });
        $("input[name='tg']:checked").attr({
            checked: false
        });
        $('.labsTestsText').val("");
        $('.qtuLabs').val("");
        $("input[name='troughCheck']:checked").attr({
            checked: false
        });
        $('.troughText').val("");
        $('.dateOfTrough').val("");
        $('.timeOfTrough').val("");
        $("input[name='cxrCheck']:checked").attr({
            checked: false
        });
        $('.cxrDate').val("");
        $("input[name='kubCheck']:checked").attr({
            checked: false
        });
        $('.kubDate').val("");
        $('.radiologyText').val("");
        $('.hepBDate').val("");
        $('.newbornScreenDate').val("");
        $('.cchdEchoText').val("");
        $('.eyeExamDate').val("");
        $('.eyeExamText').val("");
        $('.fuDate').val("");
        $("input[name='hearingCheck']:checked").attr({
            checked: false
        });
        $("input[name='carSeatCheck']:checked").attr({
            checked: false
        });
        $("input[name='cprCheck']:checked").attr({
            checked: false
        });
        $("input[name='circCheck']:checked").attr({
            checked: false
        });
        $("input[name='pivCheck']:checked").attr({
            checked: false
        });
        $("input[name='piccCheck']:checked").attr({
            checked: false
        });
        $("input[name='uacCheck']:checked").attr({
            checked: false
        });
        $("input[name='uvcCheck']:checked").attr({
            checked: false
        });
        $("input[name='salineLockCheck']:checked").attr({
            checked: false
        });
        $('.drugInput').val("");
        $('.ccDrug').val("");
        $('.hrDrug').val("");
        $('.tDrugInput').val("");
        $('.ccTDrug').val("");
        $('.hrTDrug').val("");
        $('.ccIl').val("");
        $('.hrIl').val("");
        $('.drugNotes').val("");
        $('.feedingMethod').val("");
        $("input[name='adLib']:checked").attr({
            checked: false
        });
        $("input[name='cueBased']:checked").attr({
            checked: false
        });
        $('.fiCC').val("");
        $('.hrCC').val("");
        $('.feedingAttempts').val("");
        $('.completedAttempts').val("");
        $('.planOfCare').val("");
        $('.socialConsiderations').val("");
        $('.historyChanges').val("");
        $('.referalls').val("");
        $("input[name='synagis']:checked").attr({
            checked: false
        });
        $("input[name='vaccine']:checked").attr({
            checked: false
        });
        $('.pediatrician').val("");
        $('.lastBath').val("");
        $("input[name='consent']:checked").attr({
            checked: false
        });
        $("input[name='husCP']:checked").attr({
            checked: false
        });
        $('.cpDate').val("");
        $('.cpTime').val("");
        $('.phototherapyStartDate').val("");
        $('.phototherapyEndDate').val("");
        $('.phototherapySelect').val("");
    }
});

$(document).on('click', '.legend-hide', function (event) {
    event.preventDefault();
    $(this).parent().find(".legend-hide").hide();
    $(this).parent().find(".legend-show").show();
    $(this).parent().parent().find(".section-content").hide();
});

$('#login').on('click', function (event) {
    event.preventDefault();
    const loginUsername = $('.loginUsername').val();
    const loginPassword = $('.loginPassword').val();
    // check for spaces, undefined
    if ((!loginUsername) || (loginUsername.length < 1) || (loginUsername.indexOf(' ') > 0)) {
        alert('Invalid Email')
    } else if ((!loginPassword) || (loginPassword.length < 1) || (loginPassword.indexOf(' ') > 0)) {
        alert('Invalid password')
    } else {
        const loginObject = {
            username: loginUsername,
            password: loginPassword
        };
        $.ajax({
                type: 'POST',
                url: '/signin',
                dataType: 'json',
                data: JSON.stringify(loginObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.logged-in-user').val(result._id);
                getPreviousEntries(result._id);
                $('#login-form-section').addClass('hidden');
                $('#landing-page-info').addClass('hidden');
                $('#full-form').removeClass('hidden');
                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Invalid username and password combination. Please check your username and password and try again.');
            });
    }
});

$('#register').on('click', function (event) {
    event.preventDefault();
    const username = $('.registerUsername').val();
    const password = $('.registerPassword').val();
    const email = $('.registerEmail').val();
    if (username == '') {
        alert('Please add username.');
    } else if (email == "") {
        alert('Please enter an email');
    } else if (password == "") {
        alert('Please enter a password');
    } else {
        const newUserObject = {
            email,
            password,
            username
        };
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.logged-in-user').val(result._id);
                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
                $('.js-signin-success').addClass('change-status-success');
                getPreviousEntries(result._id);
                $('#sign-up-form').addClass('hidden');
                $('#landing-page-info').addClass('hidden');
                $('#full-form').removeClass('hidden');
                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

$('#form-delete-button').on('click', function (event) {
    event.preventDefault();
    const loggedInUser = $('.logged-in-user').val();
    const selectedEntryID = $('.selected-entry-id').val();
    $.ajax({
            type: 'DELETE',
            url: `/delete-entry/${selectedEntryID}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            alert("Entry Deleted!");
            getPreviousEntries(loggedInUser);
            $('.selected-entry-id').val("");
            $("#form-delete-button").hide();
            $('.selected-entry-id').val("");
            $('.firstName').val("");
            $('.lastName').val("");
            $('.diagnosis').val("");
            $('.gestationalAge').val("");
            $('.correctedGestationalAgeDay').val("");
            $('.correctedGestationalAgeWeek').val("");
            $('.dayOfLife').val("");
            $('.dayOfBirth').val("");
            $('.timeOfBirth').val("");
            $('.birthWeight').val("");
            $('.currentWeight').val("");
            $('.kaiserScore').val("");
            $('.bloodType').val("");
            $('.coombs').val("");
            $('.acuity').val("");
            $('.bedNumber').val("");
            $('.dateOfAdmission').val("");
            $('.timeOfAdmission').val("");
            $('.dateOfDischarge').val("");
            $('.timeOfDischarge').val("");
            $('.gravida').val("");
            $('.para').val("");
            $('.age').val("");
            $('.vagCs').val("");
            $('.apgar1').val("");
            $('.apgar2').val("");
            $('.rom').val("");
            $('.hx').val("");
            $("input[name='husCheck']:checked").attr({
                checked: false
            });
            $('.husText').val("");
            $("input[name='respiratory']:checked").attr({
                checked: false
            });
            $('.respiratoryText').val("");
            $('.fio2').val("");
            $('.abdpb').val("");
            $("input[name='murmur']:checked").attr({
                checked: false
            });
            $("input[name='echo']:checked").attr({
                checked: false
            });
            $('.cardiacResults').val("");
            $('.meds').val("");
            $('.maternalBloodType').val("");
            $("input[name='cbc']:checked").attr({
                checked: false
            });
            $("input[name='tb']:checked").attr({
                checked: false
            });
            $("input[name='bmp']:checked").attr({
                checked: false
            });
            $("input[name='crp']:checked").attr({
                checked: false
            });
            $("input[name='tg']:checked").attr({
                checked: false
            });
            $('.labsTestsText').val("");
            $('.qtuLabs').val("");
            $("input[name='troughCheck']:checked").attr({
                checked: false
            });
            $('.troughText').val("");
            $('.dateOfTrough').val("");
            $('.timeOfTrough').val("");
            $("input[name='cxrCheck']:checked").attr({
                checked: false
            });
            $('.cxrDate').val("");
            $("input[name='kubCheck']:checked").attr({
                checked: false
            });
            $('.kubDate').val("");
            $('.radiologyText').val("");
            $('.hepBDate').val("");
            $('.newbornScreenDate').val("");
            $('.cchdEchoText').val("");
            $('.eyeExamDate').val("");
            $('.eyeExamText').val("");
            $('.fuDate').val("");
            $("input[name='hearingCheck']:checked").attr({
                checked: false
            });
            $("input[name='carSeatCheck']:checked").attr({
                checked: false
            });
            $("input[name='cprCheck']:checked").attr({
                checked: false
            });
            $("input[name='circCheck']:checked").attr({
                checked: false
            });
            $("input[name='pivCheck']:checked").attr({
                checked: false
            });
            $("input[name='piccCheck']:checked").attr({
                checked: false
            });
            $("input[name='uacCheck']:checked").attr({
                checked: false
            });
            $("input[name='uvcCheck']:checked").attr({
                checked: false
            });
            $("input[name='salineLockCheck']:checked").attr({
                checked: false
            });
            $('.drugInput').val("");
            $('.ccDrug').val("");
            $('.hrDrug').val("");
            $('.tDrugInput').val("");
            $('.ccTDrug').val("");
            $('.hrTDrug').val("");
            $('.ccIl').val("");
            $('.hrIl').val("");
            $('.drugNotes').val("");
            $('.feedingMethod').val("");
            $("input[name='adLib']:checked").attr({
                checked: false
            });
            $("input[name='cueBased']:checked").attr({
                checked: false
            });
            $('.fiCC').val("");
            $('.hrCC').val("");
            $('.feedingAttempts').val("");
            $('.completedAttempts').val("");
            $('.planOfCare').val("");
            $('.socialConsiderations').val("");
            $('.historyChanges').val("");
            $('.referalls').val("");
            $("input[name='synagis']:checked").attr({
                checked: false
            });
            $("input[name='vaccine']:checked").attr({
                checked: false
            });
            $('.pediatrician').val("");
            $('.lastBath').val("");
            $("input[name='consent']:checked").attr({
                checked: false
            });
            $("input[name='husCP']:checked").attr({
                checked: false
            });
            $('.cpDate').val("");
            $('.cpTime').val("");
            $('.phototherapyStartDate').val("");
            $('.phototherapyEndDate').val("");
            $('.phototherapySelect').val("");
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

//General Information time of discharge returning undefined UNFINISHED
$('#form-submit-button').on('click', function (event) {
    event.preventDefault();
    const loggedInUser = $('.logged-in-user').val();
    const selectedEntryID = $('.selected-entry-id').val();
    const firstName = $('.firstName').val();
    const lastName = $('.lastName').val();
    const diagnosis = $('.diagnosis').val();
    const gestationalAge = $('.gestationalAge').val();
    const correctedGestationalAgeDay = $('.correctedGestationalAgeDay').val();
    const correctedGestationalAgeWeek = $('.correctedGestationalAgeWeek').val();
    const dayOfLife = $('.dayOfLife').val();
    const dayOfBirth = $('.dayOfBirth').val();
    const timeOfBirth = $('.timeOfBirth').val();
    const birthWeight = $('.birthWeight').val();
    const currentWeight = $('.currentWeight').val();
    const kaiserScore = $('.kaiserScore').val();
    const bloodType = $('.bloodType').val();
    const coombs = $('.coombs').val();
    const acuity = $('.acuity').val();
    const bedNumber = $('.bedNumber').val();
    const dateOfAdmission = $('.dateOfAdmission').val();
    const timeOfAdmission = $('.timeOfAdmission').val();
    const dateOfDischarge = $('.dateOfDischarge').val();
    const timeOfDischarge = $('.timeOfDischarge').val();
    const gravida = $('.gravida').val();
    const para = $('.para').val();
    const age = $('.age').val();
    const vagCs = $('.vagCs').val();
    const apgar1 = $('.apgar1').val();
    const apgar2 = $('.apgar2').val();
    const rom = $('.rom').val();
    const hx = $('.hx').val();
    const husCheck = $("input[name='husCheck']:checked").val();
    const husText = $('.husText').val();
    const respiratoryOptions = $("input[name='respiratory']:checked").val();
    const respiratoryText = $('.respiratoryText').val();
    const fio2 = $('.fio2').val();
    const abdpb = $('.abdpb').val();
    const murmur = $("input[name='murmur']:checked").val();
    const echo = $("input[name='echo']:checked").val();
    const cardiacResults = $('.cardiacResults').val();
    const meds = $('.meds').val();
    const maternalBloodType = $('.maternalBloodType').val();
    const cbc = $("input[name='cbc']:checked").val();
    const tb = $("input[name='tb']:checked").val();
    const bmp = $("input[name='bmp']:checked").val();
    const crp = $("input[name='crp']:checked").val();
    const tg = $("input[name='tg']:checked").val();
    const labsTestsText = $('.labsTestsText').val();
    const qtuLabs = $('.qtuLabs').val();
    const troughCheck = $("input[name='troughCheck']:checked").val();
    const troughText = $('.troughText').val();
    const dateOfTrough = $('.dateOfTrough').val();
    const timeOfTrough = $('.timeOfTrough').val();
    const cxrCheck = $("input[name='cxrCheck']:checked").val();
    const cxrDate = $('.cxrDate').val();
    const kubCheck = $("input[name='kubCheck']:checked").val();
    const kubDate = $('.kubDate').val();
    const radiologyText = $('.radiologyText').val();
    const hepBDate = $('.hepBDate').val();
    const newbornScreenDate = $('.newbornScreenDate').val();
    const cchdEchoText = $('.cchdEchoText').val();
    const eyeExamDate = $('.eyeExamDate').val();
    const eyeExamText = $('.eyeExamText').val();
    const fuDate = $('.fuDate').val();
    const hearingCheck = $("input[name='hearingCheck']:checked").val();
    const carSeatCheck = $("input[name='carSeatCheck']:checked").val();
    const cprCheck = $("input[name='cprCheck']:checked").val();
    const circCheck = $("input[name='circCheck']:checked").val();
    const pivCheck = $("input[name='pivCheck']:checked").val();
    const piccCheck = $("input[name='piccCheck']:checked").val();
    const uacCheck = $("input[name='uacCheck']:checked").val();
    const uvcCheck = $("input[name='uvcCheck']:checked").val();
    const salineLockCheck = $("input[name='salineLockCheck']:checked").val();
    const drugInput = $('.drugInput').val();
    const ccDrug = $('.ccDrug').val();
    const hrDrug = $('.hrDrug').val();
    const tDrugInput = $('.tDrugInput').val();
    const ccTDrug = $('.ccTDrug').val();
    const hrTDrug = $('.hrTDrug').val();
    const ccIl = $('.ccIl').val();
    const hrIl = $('.hrIl').val();
    const drugNotes = $('.drugNotes').val();
    const feedingMethod = $('.feedingMethod').val();
    const adLib = $("input[name='adLib']:checked").val();
    const cueBased = $("input[name='cueBased']").val();
    const fiCC = $('.fiCC').val();
    const hrCC = $('.hrCC').val();
    const feedingAttempts = $('.feedingAttempts').val();
    const completedAttempts = $('.completedAttempts').val();
    const planOfCare = $('.planOfCare').val();
    const socialConsiderations = $('.socialConsiderations').val();
    const historyChanges = $('.historyChanges').val();
    const referalls = $('.referalls').val();
    const synagis = $("input[name='synagis']:checked").val();
    const vaccine = $("input[name='vaccine']:checked").val();
    const pediatrician = $('.pediatrician').val();
    const lastBath = $('.lastBath').val();
    const consent = $("input[name='consent']:checked").val();
    const husCP = $("input[name='husCP']:checked").val();
    const cpDate = $('.cpDate').val();
    const cpTime = $('.cpTime').val();
    const phototherapyStartDate = $('.phototherapyStartDate').val();
    const phototherapyEndDate = $('.phototherapyEndDate').val();
    const phototherapySelect = $('.phototherapySelect').val();
    if (firstName == '') {
        alert('Please enter first name.');
    } else if (lastName == "") {
        alert('Please enter last name');
    } else if (diagnosis == "") {
        alert('Please enter diagnosis');
    } else if (gestationalAge == "") {
        alert('Please enter gestational age');
    } else if (correctedGestationalAgeDay == "") {
        alert('Please enter gestational age day');
    } else if (dayOfLife == "") {
        alert('Please enter day of life');
    } else if (dayOfBirth == "") {
        alert('Please enter day of birth');
    } else if (timeOfBirth == "") {
        alert('Please enter time of birth');
    } else if (birthWeight == "") {
        alert('Please enter birth weight');
    } else if (currentWeight == "") {
        alert('Please enter current weight');
    } else if (kaiserScore == "") {
        alert('Please enter kaiser score');
    } else if (bloodType == null) {
        alert('Please enter bloodtype');
    } else if (coombs == null) {
        alert('Please enter COOMBS score');
    } else if (acuity == null) {
        alert('Please enter acuity score');
    } else if (bedNumber == "") {
        alert('Please enter bed number');
    } else if (dateOfAdmission == "") {
        alert('Please enter date of admission');
    } else if (timeOfAdmission == "") {
        alert('Please enter time of admission');
    } else if (gravida == '') {
        alert('Please enter gravida count');
    } else if (para == "") {
        alert('Please enter para count');
    } else if (age == "") {
        alert('Please enter maternal age');
    } else if (vagCs == null) {
        alert('Please specify birth type');
    } else if (apgar1 == null) {
        alert('Please enter digit for first APGAR selection');
    } else if (apgar2 == null) {
        alert('Please enter maternal rupture of membranes');
    } else if (hx == "") {
        alert('Please enter maternal history');
    } else if (maternalBloodType == null) {
        alert('Please enter maternal bloodtype');
    } else if (fio2 == "") {
        alert('Please enter FIO2 percentage');
    } else if (feedingMethod == null) {
        alert('Please select feeding method');
    } else {

        const generalInformationObject = {
            loggedInUser,
            firstName,
            lastName,
            diagnosis,
            gestationalAge,
            correctedGestationalAgeDay,
            correctedGestationalAgeWeek,
            dayOfLife,
            dayOfBirth,
            timeOfBirth,
            birthWeight,
            currentWeight,
            kaiserScore,
            bloodType,
            coombs,
            acuity,
            bedNumber,
            dateOfAdmission,
            timeOfAdmission,
            dateOfDischarge,
            timeOfDischarge,
            gravida,
            para,
            age,
            vagCs,
            apgar1,
            apgar2,
            rom,
            hx,
            maternalBloodType,
            husCheck,
            husText,
            respiratoryOptions,
            respiratoryText,
            fio2,
            abdpb,
            murmur,
            echo,
            cardiacResults,
            meds,
            cbc,
            tb,
            bmp,
            crp,
            tg,
            labsTestsText,
            qtuLabs,
            troughCheck,
            troughText,
            dateOfTrough,
            timeOfTrough,
            cxrCheck,
            cxrDate,
            kubCheck,
            kubDate,
            radiologyText,
            hepBDate,
            newbornScreenDate,
            cchdEchoText,
            eyeExamDate,
            eyeExamText,
            fuDate,
            hearingCheck,
            carSeatCheck,
            cprCheck,
            circCheck,
            pivCheck,
            piccCheck,
            uacCheck,
            uvcCheck,
            salineLockCheck,
            drugInput,
            ccDrug,
            hrDrug,
            tDrugInput,
            ccTDrug,
            hrTDrug,
            ccIl,
            hrIl,
            drugNotes,
            feedingMethod,
            adLib,
            cueBased,
            fiCC,
            hrCC,
            feedingAttempts,
            completedAttempts,
            planOfCare,
            socialConsiderations,
            historyChanges,
            referalls,
            synagis,
            vaccine,
            pediatrician,
            lastBath,
            consent,
            husCP,
            cpDate,
            cpTime,
            phototherapyStartDate,
            phototherapyEndDate,
            phototherapySelect
        };
        //if no entry was selected add new one
        if (selectedEntryID == "") {
            $.ajax({
                    type: 'POST',
                    url: '/form/create',
                    dataType: 'json',
                    data: JSON.stringify(generalInformationObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    alert("Entry Added!");
                    getPreviousEntries(loggedInUser);
                    $('.selected-entry-id').val("");
                    $("#form-delete-button").hide();
                    $('.selected-entry-id').val("");
                    $('.firstName').val("");
                    $('.lastName').val("");
                    $('.diagnosis').val("");
                    $('.gestationalAge').val("");
                    $('.correctedGestationalAgeDay').val("");
                    $('.correctedGestationalAgeWeek').val("");
                    $('.dayOfLife').val("");
                    $('.dayOfBirth').val("");
                    $('.timeOfBirth').val("");
                    $('.birthWeight').val("");
                    $('.currentWeight').val("");
                    $('.kaiserScore').val("");
                    $('.bloodType').val("");
                    $('.coombs').val("");
                    $('.acuity').val("");
                    $('.bedNumber').val("");
                    $('.dateOfAdmission').val("");
                    $('.timeOfAdmission').val("");
                    $('.dateOfDischarge').val("");
                    $('.timeOfDischarge').val("");
                    $('.gravida').val("");
                    $('.para').val("");
                    $('.age').val("");
                    $('.vagCs').val("");
                    $('.apgar1').val("");
                    $('.apgar2').val("");
                    $('.rom').val("");
                    $('.hx').val("");
                    $("input[name='husCheck']:checked").attr({
                        checked: false
                    });
                    $('.husText').val("");
                    $("input[name='respiratory']:checked").attr({
                        checked: false
                    });
                    $('.respiratoryText').val("");
                    $('.fio2').val("");
                    $('.abdpb').val("");
                    $("input[name='murmur']:checked").attr({
                        checked: false
                    });
                    $("input[name='echo']:checked").attr({
                        checked: false
                    });
                    $('.cardiacResults').val("");
                    $('.meds').val("");
                    $('.maternalBloodType').val("");
                    $("input[name='cbc']:checked").attr({
                        checked: false
                    });
                    $("input[name='tb']:checked").attr({
                        checked: false
                    });
                    $("input[name='bmp']:checked").attr({
                        checked: false
                    });
                    $("input[name='crp']:checked").attr({
                        checked: false
                    });
                    $("input[name='tg']:checked").attr({
                        checked: false
                    });
                    $('.labsTestsText').val("");
                    $('.qtuLabs').val("");
                    $("input[name='troughCheck']:checked").attr({
                        checked: false
                    });
                    $('.troughText').val("");
                    $('.dateOfTrough').val("");
                    $('.timeOfTrough').val("");
                    $("input[name='cxrCheck']:checked").attr({
                        checked: false
                    });
                    $('.cxrDate').val("");
                    $("input[name='kubCheck']:checked").attr({
                        checked: false
                    });
                    $('.kubDate').val("");
                    $('.radiologyText').val("");
                    $('.hepBDate').val("");
                    $('.newbornScreenDate').val("");
                    $('.cchdEchoText').val("");
                    $('.eyeExamDate').val("");
                    $('.eyeExamText').val("");
                    $('.fuDate').val("");
                    $("input[name='hearingCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='carSeatCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='cprCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='circCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='pivCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='piccCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='uacCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='uvcCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='salineLockCheck']:checked").attr({
                        checked: false
                    });
                    $('.drugInput').val("");
                    $('.ccDrug').val("");
                    $('.hrDrug').val("");
                    $('.tDrugInput').val("");
                    $('.ccTDrug').val("");
                    $('.hrTDrug').val("");
                    $('.ccIl').val("");
                    $('.hrIl').val("");
                    $('.drugNotes').val("");
                    $('.feedingMethod').val("");
                    $("input[name='adLib']:checked").attr({
                        checked: false
                    });
                    $("input[name='cueBased']:checked").attr({
                        checked: false
                    });
                    $('.fiCC').val("");
                    $('.hrCC').val("");
                    $('.feedingAttempts').val("");
                    $('.completedAttempts').val("");
                    $('.planOfCare').val("");
                    $('.socialConsiderations').val("");
                    $('.historyChanges').val("");
                    $('.referalls').val("");
                    $("input[name='synagis']:checked").attr({
                        checked: false
                    });
                    $("input[name='vaccine']:checked").attr({
                        checked: false
                    });
                    $('.pediatrician').val("");
                    $('.lastBath').val("");
                    $("input[name='consent']:checked").attr({
                        checked: false
                    });
                    $("input[name='husCP']:checked").attr({
                        checked: false
                    });
                    $('.cpDate').val("");
                    $('.cpTime').val("");
                    $('.phototherapyStartDate').val("");
                    $('.phototherapyEndDate').val("");
                    $('.phototherapySelect').val("");
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
        }
        //else update the existing one
        else {
            $.ajax({
                    type: 'PUT',
                    url: '/form/update/' + selectedEntryID,
                    dataType: 'json',
                    data: JSON.stringify(generalInformationObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    alert("Entry Updated!");
                    getPreviousEntries(loggedInUser);
                    $('.selected-entry-id').val("");
                    $("#form-delete-button").hide();
                    $('.selected-entry-id').val("");
                    $('.firstName').val("");
                    $('.lastName').val("");
                    $('.diagnosis').val("");
                    $('.gestationalAge').val("");
                    $('.correctedGestationalAgeDay').val("");
                    $('.correctedGestationalAgeWeek').val("");
                    $('.dayOfLife').val("");
                    $('.dayOfBirth').val("");
                    $('.timeOfBirth').val("");
                    $('.birthWeight').val("");
                    $('.currentWeight').val("");
                    $('.kaiserScore').val("");
                    $('.bloodType').val("");
                    $('.coombs').val("");
                    $('.acuity').val("");
                    $('.bedNumber').val("");
                    $('.dateOfAdmission').val("");
                    $('.timeOfAdmission').val("");
                    $('.dateOfDischarge').val("");
                    $('.timeOfDischarge').val("");
                    $('.gravida').val("");
                    $('.para').val("");
                    $('.age').val("");
                    $('.vagCs').val("");
                    $('.apgar1').val("");
                    $('.apgar2').val("");
                    $('.rom').val("");
                    $('.hx').val("");
                    $("input[name='husCheck']:checked").attr({
                        checked: false
                    });
                    $('.husText').val("");
                    $("input[name='respiratory']:checked").attr({
                        checked: false
                    });
                    $('.respiratoryText').val("");
                    $('.fio2').val("");
                    $('.abdpb').val("");
                    $("input[name='murmur']:checked").attr({
                        checked: false
                    });
                    $("input[name='echo']:checked").attr({
                        checked: false
                    });
                    $('.cardiacResults').val("");
                    $('.meds').val("");
                    $('.maternalBloodType').val("");
                    $("input[name='cbc']:checked").attr({
                        checked: false
                    });
                    $("input[name='tb']:checked").attr({
                        checked: false
                    });
                    $("input[name='bmp']:checked").attr({
                        checked: false
                    });
                    $("input[name='crp']:checked").attr({
                        checked: false
                    });
                    $("input[name='tg']:checked").attr({
                        checked: false
                    });
                    $('.labsTestsText').val("");
                    $('.qtuLabs').val("");
                    $("input[name='troughCheck']:checked").attr({
                        checked: false
                    });
                    $('.troughText').val("");
                    $('.dateOfTrough').val("");
                    $('.timeOfTrough').val("");
                    $("input[name='cxrCheck']:checked").attr({
                        checked: false
                    });
                    $('.cxrDate').val("");
                    $("input[name='kubCheck']:checked").attr({
                        checked: false
                    });
                    $('.kubDate').val("");
                    $('.radiologyText').val("");
                    $('.hepBDate').val("");
                    $('.newbornScreenDate').val("");
                    $('.cchdEchoText').val("");
                    $('.eyeExamDate').val("");
                    $('.eyeExamText').val("");
                    $('.fuDate').val("");
                    $("input[name='hearingCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='carSeatCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='cprCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='circCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='pivCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='piccCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='uacCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='uvcCheck']:checked").attr({
                        checked: false
                    });
                    $("input[name='salineLockCheck']:checked").attr({
                        checked: false
                    });
                    $('.drugInput').val("");
                    $('.ccDrug').val("");
                    $('.hrDrug').val("");
                    $('.tDrugInput').val("");
                    $('.ccTDrug').val("");
                    $('.hrTDrug').val("");
                    $('.ccIl').val("");
                    $('.hrIl').val("");
                    $('.drugNotes').val("");
                    $('.feedingMethod').val("");
                    $("input[name='adLib']:checked").attr({
                        checked: false
                    });
                    $("input[name='cueBased']:checked").attr({
                        checked: false
                    });
                    $('.fiCC').val("");
                    $('.hrCC').val("");
                    $('.feedingAttempts').val("");
                    $('.completedAttempts').val("");
                    $('.planOfCare').val("");
                    $('.socialConsiderations').val("");
                    $('.historyChanges').val("");
                    $('.referalls').val("");
                    $("input[name='synagis']:checked").attr({
                        checked: false
                    });
                    $("input[name='vaccine']:checked").attr({
                        checked: false
                    });
                    $('.pediatrician').val("");
                    $('.lastBath').val("");
                    $("input[name='consent']:checked").attr({
                        checked: false
                    });
                    $("input[name='husCP']:checked").attr({
                        checked: false
                    });
                    $('.cpDate').val("");
                    $('.cpTime').val("");
                    $('.phototherapyStartDate').val("");
                    $('.phototherapyEndDate').val("");
                    $('.phototherapySelect').val("");
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
        }

    };

});

$('#sign-up-link').on('click', function (event) {
    event.preventDefault();
    $('#login-form-section').addClass('hidden');
    $('#sign-up-form').removeClass('hidden');
});

$('#sign-in-link').on('click', function (event) {
    event.preventDefault();
    $('#sign-up-form').addClass('hidden');
    $('#login-form-section').removeClass('hidden');
});

//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
