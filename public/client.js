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
                htmlOutput += '<option value="' + result.entries[i]._id + '">' + splitDataOutputOnly[1] + '/' + splitDataOutputOnly[2] + '/' + splitDataOutputOnly[0] + ' ' + splitTimeOutputOnly[0] + ':' + splitTimeOutputOnly[1] + '(UTC)  ' + result.entries[i].characterName + ' ' + result.entries[i].characterClass + '</option>';
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
            $('.characterName').val(result.entries[0].characterName);
            $('.characterClass').val(result.entries[0].characterClass);
            $('.characterLevel').val(result.entries[0].characterLevel);
            $('.characterRace').val(result.entries[0].characterRace);
            $('.insight').val(result.entries[0].insight);
            $('.alignment').val(result.entries[0].alignment);
            $('.background').val(result.entries[0].background);
            $('.experience').val(result.entries[0].experience);
            $('.strength').val(result.entries[0].strength);
            $('.timeOfBirth').val(result.entries[0].timeOfBirth);
            $('.birthWeight').val(result.entries[0].birthWeight);
            $('.hitPoints').val(result.entries[0].hitPoints);
            $('.dexterity').val(result.entries[0].dexterity);
            $('.constitution').val(result.entries[0].constitution);
            $('.intelligence').val(result.entries[0].intelligence);
            $('.gp').val(result.entries[0].gp);
            $('.acrobatics').val(result.entries[0].acrobatics);
            $('.animalHandling').val(result.entries[0].animalHandling);
            $('.arcana').val(result.entries[0].arcana);
            $('.athletics').val(result.entries[0].athletics);
            $('.wisdom').val(result.entries[0].wisdom);
            $('.para').val(result.entries[0].para);
            $('.age').val(result.entries[0].age);
            $('.deception').val(result.entries[0].deception);
            $('.intimidation').val(result.entries[0].intimidation);
            $('.investigation').val(result.entries[0].investigation);
            $('.rom').val(result.entries[0].rom);
            $('.charisma').val(result.entries[0].charisma);
            checkInputByValue(result, 'husCheck', 'husCheck');
            $('.performance').val(result.entries[0].performance);
            checkInputByValue(result, 'respiratoryOptions', 'RA');
            checkInputByValue(result, 'respiratoryOptions', 'VENT');
            checkInputByValue(result, 'respiratoryOptions', 'HFNC');
            checkInputByValue(result, 'respiratoryOptions', 'VT');
            checkInputByValue(result, 'respiratoryOptions', 'CPAP');
            $('.perception').val(result.entries[0].perception);
            $('.fio2').val(result.entries[0].fio2);
            $('.abdpb').val(result.entries[0].abdpb);
            checkInputByValue(result, 'murmur', 'murmur');
            checkInputByValue(result, 'echo', 'echo');
            $('.cardiacResults').val(result.entries[0].cardiacResults);
            $('.meds').val(result.entries[0].meds);
            $('.history').val(result.entries[0].history);
            checkInputByValue(result, 'cbc', 'cbc');
            checkInputByValue(result, 'tb', 'tb');
            checkInputByValue(result, 'bmp', 'bmp');
            checkInputByValue(result, 'crp', 'crp');
            checkInputByValue(result, 'tg', 'tg');
            $('.persuasion').val(result.entries[0].persuasion);
            $('.qtuLabs').val(result.entries[0].qtuLabs);
            checkInputByValue(result, 'troughCheck', 'troughCheck');
            $('.medicine').val(result.entries[0].medicine);
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
            $('.religion').val(result.entries[0].religion);
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
            $('.stealth').val(result.entries[0].stealth);
            $('.ccDrug').val(result.entries[0].ccDrug);
            $('.hrDrug').val(result.entries[0].hrDrug);
            $('.sleightOfHand').val(result.entries[0].sleightOfHand);
            $('.ccTDrug').val(result.entries[0].ccTDrug);
            $('.hrTDrug').val(result.entries[0].hrTDrug);
            $('.ccIl').val(result.entries[0].ccIl);
            $('.hrIl').val(result.entries[0].hrIl);
            $('.nature').val(result.entries[0].nature);
            $('.feedingMethod').val(result.entries[0].feedingMethod);
            checkInputByValue(result, 'adLib', 'adLib');
            checkInputByValue(result, 'cueBased', 'cueBased');
            $('.fiCC').val(result.entries[0].fiCC);
            $('.hrCC').val(result.entries[0].hrCC);
            $('.feedingAttempts').val(result.entries[0].feedingAttempts);
            $('.completedAttempts').val(result.entries[0].completedAttempts);
            $('.planOfCare').val(result.entries[0].planOfCare);
            $('.socialConsiderations').val(result.entries[0].socialConsiderations);
            $('.survival').val(result.entries[0].survival);
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
    //    $(".section-content").hide();
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
        $('.characterName').val("");
        $('.characterClass').val("");
        $('.characterLevel').val("");
        $('.characterRace').val("");
        $('.alignment').val("");
        $('.background').val("");
        $('.experience').val("");
        $('.strength').val("");
        $('.timeOfBirth').val("");
        $('.birthWeight').val("");
        $('.hitPoints').val("");
        $('.dexterity').val("");
        $('.insight').val("");
        $('.constitution').val("");
        $('.intelligence').val("");
        $('.gp').val("");
        $('.acrobatics').val("");
        $('.animalHandling').val("");
        $('.arcana').val("");
        $('.athletics').val("");
        $('.wisdom').val("");
        $('.para').val("");
        $('.age').val("");
        $('.deception').val("");
        $('.intimidation').val("");
        $('.investigation').val("");
        $('.rom').val("");
        $('.charisma').val("");
        $("input[name='husCheck']:checked").attr({
            checked: false
        });
        $('.performance').val("");
        $("input[name='respiratory']:checked").attr({
            checked: false
        });
        $('.perception').val("");
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
        $('.history').val("");
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
        $('.persuasion').val("");
        $('.qtuLabs').val("");
        $("input[name='troughCheck']:checked").attr({
            checked: false
        });
        $('.medicine').val("");
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
        $('.religion').val("");
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
        $('.stealth').val("");
        $('.ccDrug').val("");
        $('.hrDrug').val("");
        $('.sleightOfHand').val("");
        $('.ccTDrug').val("");
        $('.hrTDrug').val("");
        $('.ccIl').val("");
        $('.hrIl').val("");
        $('.nature').val("");
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
        $('.survival').val("");
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
    $('#full-form').removeClass('hidden');
    $('#login-form-section').addClass('hidden');
    $('#landing-page-info').addClass('hidden');
    $('.details').addClass('hidden');
    $('.hero-image').addClass('hidden');
    //    const loginUsername = $('.loginUsername').val();
    //    const loginPassword = $('.loginPassword').val();
    //    // check for spaces, undefined
    //    if ((!loginUsername) || (loginUsername.length < 1) || (loginUsername.indexOf(' ') > 0)) {
    //        alert('Invalid Email')
    //    } else if ((!loginPassword) || (loginPassword.length < 1) || (loginPassword.indexOf(' ') > 0)) {
    //        alert('Invalid password')
    //    } else {
    //        const loginObject = {
    //            username: loginUsername,
    //            password: loginPassword
    //        };
    //        $.ajax({
    //                type: 'POST',
    //                url: '/signin',
    //                dataType: 'json',
    //                data: JSON.stringify(loginObject),
    //                contentType: 'application/json'
    //            })
    //            .done(function (result) {
    //                $('.logged-in-user').val(result._id);
    //                getPreviousEntries(result._id);
    //                $('#login-form-section').addClass('hidden');
    //                $('#landing-page-info').addClass('hidden');
    //                $('#full-form').removeClass('hidden');
    //                $('body').css('background', 'white');
    //            })
    //            .fail(function (jqXHR, error, errorThrown) {
    //                console.log(jqXHR);
    //                console.log(error);
    //                console.log(errorThrown);
    //                alert('Invalid username and password combination. Please check your username and password and try again.');
    //            });
    //    }
});

$('#register').on('click', function (event) {
    event.preventDefault();
    $('#full-form').removeClass('hidden');
    $('#sign-up-form').addClass('hidden');
    $('#landing-page-info').addClass('hidden');
    $('.details').addClass('hidden');
    $('.hero-image').addClass('hidden');
    //    const username = $('.registerUsername').val();
    //    const password = $('.registerPassword').val();
    //    const email = $('.registerEmail').val();
    //    if (username == '') {
    //        alert('Please add username.');
    //    } else if (email == "") {
    //        alert('Please enter an email');
    //    } else if (password == "") {
    //        alert('Please enter a password');
    //    } else {
    //        const newUserObject = {
    //            email,
    //            password,
    //            username
    //        };
    //        $.ajax({
    //                type: 'POST',
    //                url: '/users/create',
    //                dataType: 'json',
    //                data: JSON.stringify(newUserObject),
    //                contentType: 'application/json'
    //            })
    //            .done(function (result) {
    //                $('.logged-in-user').val(result._id);
    //                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
    //                $('.js-signin-success').addClass('change-status-success');
    //                getPreviousEntries(result._id);
    //                $('#sign-up-form').addClass('hidden');
    //                $('#landing-page-info').addClass('hidden');
    //                $('#full-form').removeClass('hidden');
    //                $('body').css('background', 'white');
    //            })
    //            .fail(function (jqXHR, error, errorThrown) {
    //                console.log(jqXHR);
    //                console.log(error);
    //                console.log(errorThrown);
    //            });
    //    };
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
            $('.characterName').val("");
            $('.characterClass').val("");
            $('.characterLevel').val("");
            $('.characterRace').val("");
            $('.alignment').val("");
            $('.background').val("");
            $('.experience').val("");
            $('.strength').val("");
            $('.timeOfBirth').val("");
            $('.birthWeight').val("");
            $('.hitPoints').val("");
            $('.dexterity').val("");
            $('.insight').val("");
            $('.constitution').val("");
            $('.intelligence').val("");
            $('.gp').val("");
            $('.acrobatics').val("");
            $('.animalHandling').val("");
            $('.arcana').val("");
            $('.athletics').val("");
            $('.wisdom').val("");
            $('.para').val("");
            $('.age').val("");
            $('.deception').val("");
            $('.intimidation').val("");
            $('.investigation').val("");
            $('.rom').val("");
            $('.charisma').val("");
            $("input[name='husCheck']:checked").attr({
                checked: false
            });
            $('.performance').val("");
            $("input[name='respiratory']:checked").attr({
                checked: false
            });
            $('.perception').val("");
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
            $('.history').val("");
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
            $('.persuasion').val("");
            $('.qtuLabs').val("");
            $("input[name='troughCheck']:checked").attr({
                checked: false
            });
            $('.medicine').val("");
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
            $('.religion').val("");
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
            $('.stealth').val("");
            $('.ccDrug').val("");
            $('.hrDrug').val("");
            $('.sleightOfHand').val("");
            $('.ccTDrug').val("");
            $('.hrTDrug').val("");
            $('.ccIl').val("");
            $('.hrIl').val("");
            $('.nature').val("");
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
            $('.survival').val("");
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
    const characterName = $('.characterName').val();
    const characterClass = $('.characterClass').val();
    const characterLevel = $('.characterLevel').val();
    const characterRace = $('.characterRace').val();
    const alignment = $('.alignment').val();
    const background = $('.background').val();
    const experience = $('.experience').val();
    const strength = $('.strength').val();
    const timeOfBirth = $('.timeOfBirth').val();
    const birthWeight = $('.birthWeight').val();
    const hitPoints = $('.hitPoints').val();
    const dexterity = $('.dexterity').val();
    const insight = $('.insight').val();
    const constitution = $('.constitution').val();
    const intelligence = $('.intelligence').val();
    const gp = $('.gp').val();
    const acrobatics = $('.acrobatics').val();
    const animalHandling = $('.animalHandling').val();
    const arcana = $('.arcana').val();
    const athletics = $('.athletics').val();
    const wisdom = $('.wisdom').val();
    const para = $('.para').val();
    const age = $('.age').val();
    const deception = $('.deception').val();
    const intimidation = $('.intimidation').val();
    const investigation = $('.investigation').val();
    const rom = $('.rom').val();
    const charisma = $('.charisma').val();
    const husCheck = $("input[name='husCheck']:checked").val();
    const performance = $('.performance').val();
    const respiratoryOptions = $("input[name='respiratory']:checked").val();
    const perception = $('.perception').val();
    const fio2 = $('.fio2').val();
    const abdpb = $('.abdpb').val();
    const murmur = $("input[name='murmur']:checked").val();
    const echo = $("input[name='echo']:checked").val();
    const cardiacResults = $('.cardiacResults').val();
    const meds = $('.meds').val();
    const history = $('.history').val();
    const cbc = $("input[name='cbc']:checked").val();
    const tb = $("input[name='tb']:checked").val();
    const bmp = $("input[name='bmp']:checked").val();
    const crp = $("input[name='crp']:checked").val();
    const tg = $("input[name='tg']:checked").val();
    const persuasion = $('.persuasion').val();
    const qtuLabs = $('.qtuLabs').val();
    const troughCheck = $("input[name='troughCheck']:checked").val();
    const medicine = $('.medicine').val();
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
    const religion = $('.religion').val();
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
    const stealth = $('.stealth').val();
    const ccDrug = $('.ccDrug').val();
    const hrDrug = $('.hrDrug').val();
    const sleightOfHand = $('.sleightOfHand').val();
    const ccTDrug = $('.ccTDrug').val();
    const hrTDrug = $('.hrTDrug').val();
    const ccIl = $('.ccIl').val();
    const hrIl = $('.hrIl').val();
    const nature = $('.nature').val();
    const feedingMethod = $('.feedingMethod').val();
    const adLib = $("input[name='adLib']:checked").val();
    const cueBased = $("input[name='cueBased']").val();
    const fiCC = $('.fiCC').val();
    const hrCC = $('.hrCC').val();
    const feedingAttempts = $('.feedingAttempts').val();
    const completedAttempts = $('.completedAttempts').val();
    const planOfCare = $('.planOfCare').val();
    const socialConsiderations = $('.socialConsiderations').val();
    const survival = $('.survival').val();
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
    if (characterName == '') {
        alert('Please enter first name.');
    } else if (characterClass == "") {
        alert('Please enter last name');
    } else if (characterLevel == "") {
        alert('Please enter characterLevel');
    } else if (characterRace == "") {
        alert('Please enter character race');
    } else if (alignment == "") {
        alert('Please enter gestational age day');
    } else if (experience == "") {
        alert('Please enter day of life');
    } else if (strength == "") {
        alert('Please enter day of birth');
    } else if (timeOfBirth == "") {
        alert('Please enter time of birth');
    } else if (birthWeight == "") {
        alert('Please enter birth weight');
    } else if (hitPoints == "") {
        alert('Please enter current weight');
    } else if (dexterity == "") {
        alert('Please enter kaiser score');
    } else if (insight == null) {
        alert('Please enter insight');
    } else if (constitution == null) {
        alert('Please enter constitution score');
    } else if (intelligence == null) {
        alert('Please enter intelligence score');
    } else if (gp == "") {
        alert('Please enter bed number');
    } else if (acrobatics == "") {
        alert('Please enter date of admission');
    } else if (animalHandling == "") {
        alert('Please enter time of admission');
    } else if (wisdom == '') {
        alert('Please enter wisdom count');
    } else if (para == "") {
        alert('Please enter para count');
    } else if (age == "") {
        alert('Please enter maternal age');
    } else if (deception == null) {
        alert('Please specify birth type');
    } else if (intimidation == null) {
        alert('Please enter digit for first APGAR selection');
    } else if (investigation == null) {
        alert('Please enter maternal rupture of membranes');
    } else if (charisma == "") {
        alert('Please enter maternal history');
    } else if (history == null) {
        alert('Please enter maternal insight');
    } else if (fio2 == "") {
        alert('Please enter FIO2 percentage');
    } else if (feedingMethod == null) {
        alert('Please select feeding method');
    } else {

        const generalInformationObject = {
            loggedInUser,
            characterName,
            characterClass,
            characterLevel,
            characterRace,
            alignment,
            background,
            experience,
            strength,
            timeOfBirth,
            birthWeight,
            hitPoints,
            dexterity,
            insight,
            constitution,
            intelligence,
            gp,
            acrobatics,
            animalHandling,
            arcana,
            athletics,
            wisdom,
            para,
            age,
            deception,
            intimidation,
            investigation,
            rom,
            charisma,
            history,
            husCheck,
            performance,
            respiratoryOptions,
            perception,
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
            persuasion,
            qtuLabs,
            troughCheck,
            medicine,
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
            religion,
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
            stealth,
            ccDrug,
            hrDrug,
            sleightOfHand,
            ccTDrug,
            hrTDrug,
            ccIl,
            hrIl,
            nature,
            feedingMethod,
            adLib,
            cueBased,
            fiCC,
            hrCC,
            feedingAttempts,
            completedAttempts,
            planOfCare,
            socialConsiderations,
            survival,
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
                    $('.characterName').val("");
                    $('.characterClass').val("");
                    $('.characterLevel').val("");
                    $('.characterRace').val("");
                    $('.alignment').val("");
                    $('.background').val("");
                    $('.experience').val("");
                    $('.strength').val("");
                    $('.timeOfBirth').val("");
                    $('.birthWeight').val("");
                    $('.hitPoints').val("");
                    $('.dexterity').val("");
                    $('.insight').val("");
                    $('.constitution').val("");
                    $('.intelligence').val("");
                    $('.gp').val("");
                    $('.acrobatics').val("");
                    $('.animalHandling').val("");
                    $('.arcana').val("");
                    $('.athletics').val("");
                    $('.wisdom').val("");
                    $('.para').val("");
                    $('.age').val("");
                    $('.deception').val("");
                    $('.intimidation').val("");
                    $('.investigation').val("");
                    $('.rom').val("");
                    $('.charisma').val("");
                    $("input[name='husCheck']:checked").attr({
                        checked: false
                    });
                    $('.performance').val("");
                    $("input[name='respiratory']:checked").attr({
                        checked: false
                    });
                    $('.perception').val("");
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
                    $('.history').val("");
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
                    $('.persuasion').val("");
                    $('.qtuLabs').val("");
                    $("input[name='troughCheck']:checked").attr({
                        checked: false
                    });
                    $('.medicine').val("");
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
                    $('.religion').val("");
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
                    $('.stealth').val("");
                    $('.ccDrug').val("");
                    $('.hrDrug').val("");
                    $('.sleightOfHand').val("");
                    $('.ccTDrug').val("");
                    $('.hrTDrug').val("");
                    $('.ccIl').val("");
                    $('.hrIl').val("");
                    $('.nature').val("");
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
                    $('.survival').val("");
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
                    $('.characterName').val("");
                    $('.characterClass').val("");
                    $('.characterLevel').val("");
                    $('.characterRace').val("");
                    $('.alignment').val("");
                    $('.background').val("");
                    $('.experience').val("");
                    $('.strength').val("");
                    $('.timeOfBirth').val("");
                    $('.birthWeight').val("");
                    $('.hitPoints').val("");
                    $('.dexterity').val("");
                    $('.insight').val("");
                    $('.constitution').val("");
                    $('.intelligence').val("");
                    $('.gp').val("");
                    $('.acrobatics').val("");
                    $('.animalHandling').val("");
                    $('.arcana').val("");
                    $('.athletics').val("");
                    $('.wisdom').val("");
                    $('.para').val("");
                    $('.age').val("");
                    $('.deception').val("");
                    $('.intimidation').val("");
                    $('.investigation').val("");
                    $('.rom').val("");
                    $('.charisma').val("");
                    $("input[name='husCheck']:checked").attr({
                        checked: false
                    });
                    $('.performance').val("");
                    $("input[name='respiratory']:checked").attr({
                        checked: false
                    });
                    $('.perception').val("");
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
                    $('.history').val("");
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
                    $('.persuasion').val("");
                    $('.qtuLabs').val("");
                    $("input[name='troughCheck']:checked").attr({
                        checked: false
                    });
                    $('.medicine').val("");
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
                    $('.religion').val("");
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
                    $('.stealth').val("");
                    $('.ccDrug').val("");
                    $('.hrDrug').val("");
                    $('.sleightOfHand').val("");
                    $('.ccTDrug').val("");
                    $('.hrTDrug').val("");
                    $('.ccIl').val("");
                    $('.hrIl').val("");
                    $('.nature').val("");
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
                    $('.survival').val("");
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

//d20 dice
var d20 = {
    dice: roll = {
        value: 0,
    }
}

$("#d20").on("click", function () {
    d20.dice.value = 1 + Math.floor(Math.random() * 20);
    $("#d20-value").empty();
    $("#d20-value").append("You rolled: " + d20.dice.value + " ");
});


//d12 dice
var d12 = {
    dice: roll = {
        value: 0,
    }
}

$("#d12").on("click", function () {
    d12.dice.value = 1 + Math.floor(Math.random() * 12);
    $("#d12-value").empty();
    $("#d12-value").append("You rolled: " + d12.dice.value + " ");
});

//d10 dice
var d10 = {
    dice: roll = {
        value: 0,
    }
}

$("#d10").on("click", function () {
    d10.dice.value = 1 + Math.floor(Math.random() * 10);
    $("#d10-value").empty();
    $("#d10-value").append("You rolled: " + d10.dice.value + " ");
});

//d8 dice
var d8 = {
    dice: roll = {
        value: 0,
    }
}

$("#d8").on("click", function () {
    d8.dice.value = 1 + Math.floor(Math.random() * 8);
    $("#d8-value").empty();
    $("#d8-value").append("You rolled: " + d8.dice.value + " ");
});

// d6 dice
var d6 = {
    dice: roll = {
        value: 0,
    }
}

$("#d6").on("click", function () {
    d6.dice.value = 1 + Math.floor(Math.random() * 6);
    $("#d6-value").empty();
    $("#d6-value").append("You rolled: " + d6.dice.value + " ");
});

// d4 dice
var d4 = {
    dice: roll = {
        value: 0,
    }
}

$("#d4").on("click", function () {
    d4.dice.value = 1 + Math.floor(Math.random() * 4);
    $("#d4-value").empty();
    $("#d4-value").append("You rolled: " + d4.dice.value + " ");
});

let htmlImageOutput = "<img src='dice-" + diceNumber + ".png' class='dice-image'>";

//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
