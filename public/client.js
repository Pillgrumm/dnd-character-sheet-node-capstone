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
            console.log(result);
            let htmlOutput = "";
            for (let i = 0; i < result.entries.length; i++) {
                htmlOutput += '<form class="input-wrapper character-name">';
                htmlOutput += '<input type="hidden" class="character-name-value" value="' + result.entries[i]._id + '">';
                htmlOutput += '<button type="button" class="character-name-button">';
                htmlOutput += result.entries[i].characterName;
                htmlOutput += ', Level ';
                htmlOutput += result.entries[i].characterLevel
                htmlOutput += ' ';
                htmlOutput += result.entries[i].characterClass;
                htmlOutput += '</button>';
                htmlOutput += '</form>';
            }
            $(".character-content").html(htmlOutput);
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
            $('.hitPoints').val(result.entries[0].hitPoints);
            $('.dexterity').val(result.entries[0].dexterity);
            $('.insight').val(result.entries[0].insight);
            $('.constitution').val(result.entries[0].constitution);
            $('.intelligence').val(result.entries[0].intelligence);
            $('.gp').val(result.entries[0].gp);
            $('.acrobatics').val(result.entries[0].acrobatics);
            $('.animalHandling').val(result.entries[0].animalHandling);
            $('.arcana').val(result.entries[0].arcana);
            $('.athletics').val(result.entries[0].athletics);
            $('.wisdom').val(result.entries[0].wisdom);
            $('.deception').val(result.entries[0].deception);
            $('.intimidation').val(result.entries[0].intimidation);
            $('.investigation').val(result.entries[0].investigation);
            $('.charisma').val(result.entries[0].charisma);
            $('.history').val(result.entries[0].history);
            $('.performance').val(result.entries[0].performance);
            $('.perception').val(result.entries[0].perception);
            $('.persuasion').val(result.entries[0].persuasion);
            $('.medicine').val(result.entries[0].medicine);
            $('.religion').val(result.entries[0].religion);
            $('.stealth').val(result.entries[0].stealth);
            $('.sleightOfHand').val(result.entries[0].sleightOfHand);
            $('.nature').val(result.entries[0].nature);
            $('.survival').val(result.entries[0].survival);
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
    if ((!loginUsername) || (loginUsername.length < 1) || (loginUsername.indexOf(' ') > 0)) {
        alert('Invalid Email')
    } else if ((!loginPassword) || (loginPassword.length < 1) || (loginPassword.indexOf(' ') > 0)) {
        alert('Invalid password')
    } else {
        const loginObject = {
            username: loginUsername,
            password: loginPassword
        };
        //login test console log
        console.log(loginObject);
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
                $('.details').addClass('hidden');
                $('.footer-wrapper').addClass('hidden');
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
                $('.details').addClass('hidden');
                $('.footer-wrapper').addClass('hidden');
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

///////////////////////////////////////////////
$(document).on('click', '.character-name-button', function (event) {
    event.preventDefault();
    const characterNameValue = $(this).parent().find('.character-name-value').val();

    $.ajax({
            type: 'GET',
            url: '/get-entry-by-id/' + characterNameValue,
            dataType: 'json',
            contentType: 'application/json'
        })
        .done(function (result) {
            console.log(result.entries[0]);
            $("#form-delete-button").show();
            $('.name-legend').text(result.entries[0].characterName);
            $('.selected-entry-id').val(result.entries[0]._id);
            $('.characterName').val(result.entries[0].characterName);
            $('.characterClass').val(result.entries[0].characterClass);
            $('.characterLevel').val(result.entries[0].characterLevel);
            $('.characterRace').val(result.entries[0].characterRace);
            $('.alignment').val(result.entries[0].alignment);
            $('.background').val(result.entries[0].background);
            $('.experience').val(result.entries[0].experience);
            $('.strength').val(result.entries[0].strength);
            $('.hitPoints').val(result.entries[0].hitPoints);
            $('.dexterity').val(result.entries[0].dexterity);
            $('.insight').val(result.entries[0].insight);
            $('.constitution').val(result.entries[0].constitution);
            $('.intelligence').val(result.entries[0].intelligence);
            $('.gp').val(result.entries[0].gp);
            $('.acrobatics').val(result.entries[0].acrobatics);
            $('.animalHandling').val(result.entries[0].animalHandling);
            $('.arcana').val(result.entries[0].arcana);
            $('.athletics').val(result.entries[0].athletics);
            $('.wisdom').val(result.entries[0].wisdom);
            $('.deception').val(result.entries[0].deception);
            $('.intimidation').val(result.entries[0].intimidation);
            $('.investigation').val(result.entries[0].investigation);
            $('.charisma').val(result.entries[0].charisma);
            $('.performance').val(result.entries[0].performance);
            $('.perception').val(result.entries[0].perception);
            $('.history').val(result.entries[0].history);
            $('.persuasion').val(result.entries[0].persuasion);
            $('.medicine').val(result.entries[0].medicine);
            $('.religion').val(result.entries[0].religion);
            $('.stealth').val(result.entries[0].stealth);
            $('.sleightOfHand').val(result.entries[0].sleightOfHand);
            $('.nature').val(result.entries[0].nature);
            $('.survival').val(result.entries[0].survival);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

////////////////////////////////////////////////

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
            $('.name-legend').text("Create a character");
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
            $('.deception').val("");
            $('.intimidation').val("");
            $('.investigation').val("");
            $('.charisma').val("");
            $('.performance').val("");
            $('.perception').val("");
            $('.history').val("");
            $('.persuasion').val("");
            $('.medicine').val("");
            $('.religion').val("");
            $('.stealth').val("");
            $('.sleightOfHand').val("");
            $('.nature').val("");
            $('.feedingMethod').val("");
            $('.survival').val("");
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
    const deception = $('.deception').val();
    const intimidation = $('.intimidation').val();
    const investigation = $('.investigation').val();
    const charisma = $('.charisma').val();
    const performance = $('.performance').val();
    const perception = $('.perception').val();
    const history = $('.history').val();
    const persuasion = $('.persuasion').val();
    const medicine = $('.medicine').val();
    const religion = $('.religion').val();
    const stealth = $('.stealth').val();
    const sleightOfHand = $('.sleightOfHand').val();
    const nature = $('.nature').val();
    const survival = $('.survival').val();
    if (characterName == '') {
        alert('Please enter your characters name.');
    } else if (characterClass == "") {
        alert('Please enter your characters class');
    } else if (characterLevel == "") {
        alert('Please enter your characters Level');
    } else if (characterRace == "") {
        alert('Please enter your characters race');
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
            deception,
            intimidation,
            investigation,
            charisma,
            history,
            performance,
            perception,
            persuasion,
            medicine,
            religion,
            stealth,
            sleightOfHand,
            nature,
            survival

        };

        // console log for entire form
        console.log(generalInformationObject);
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
                    alert("Character Added!");
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
                    $('.deception').val("");
                    $('.intimidation').val("");
                    $('.investigation').val("");
                    $('.charisma').val("");
                    $('.performance').val("");
                    $('.perception').val("");
                    $('.history').val("");
                    $('.persuasion').val("");
                    $('.medicine').val("");
                    $('.religion').val("");
                    $('.stealth').val("");
                    $('.sleightOfHand').val("");
                    $('.nature').val("");
                    $('.survival').val("");
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
        }
        //else update the existing one
        else {
            console.log("inside put", selectedEntryID);
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
                    $('.name-legend').text("Create a character");
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
                    $('.deception').val("");
                    $('.intimidation').val("");
                    $('.investigation').val("");
                    $('.charisma').val("");
                    $('.perception').val("");
                    $('.history').val("");
                    $('.persuasion').val("");
                    $('.medicine').val("");
                    $('.stealth').val("");
                    $('.sleightOfHand').val("");
                    $('.nature').val("");
                    $('.survival').val("");
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

//let htmlImageOutput = "<img src='images/dice/dice-" + diceNumber + ".png' class='dice-image'>";

//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
