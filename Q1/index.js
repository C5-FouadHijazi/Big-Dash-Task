console.log("arrowTitle");


//*checkhing that we workingon the body
const body = $("body");



//*Make A All Detailes Container Div
const allDetailesDiv = $(`<div id="allDetailesDiv">
</div>`);
allDetailesDiv.appendTo(body);

//Rate Team 1


$('#here_table').append('<tr><th>' + "Rate" + '</tr></th>');

let team_1_rates = [];
let team_2_rates = [];


for (let i = 0; i < 7; i++) {

    let rate = Math.floor(Math.random() * 11);

    if (team_1_rates.indexOf(rate) === -1) {
        team_1_rates.push(rate);
        team_2_rates.unshift(rate)

        $('#here_table').append('<tr><td>' + team_1_rates[i] + '</td></tr>');
    }
    else
        i--;
}

let sum = 0
for (let x = 0; x < team_1_rates.length; x++) {
    sum += team_1_rates[x]
    
}
$('#here_table').append('<tr><td>' + sum + '</td></tr>');
console.log(team_1_rates);
console.log(sum);

// Palyers Team 1

$('#here_table_2').append('<tr><th>' + "Player Name" + '</tr></th>');

const playeTeam1 = ["Fouad", "Mustafa", "Samir", "Ali", "Shishani", "Afagani", "Kahaf", "Sum"]

playeTeam1.forEach(element => {
    return $('#here_table_2').append('<tr><td>' + element + '</td></tr>');

});

//----------------------------------------//

//Rate Team 2

;
$('#here_table_3').append('<tr><th>' + "Rate" + '</tr></th>');


console.log(team_2_rates);

let array2 = []

for (let i = 0; i < team_1_rates.length; i++) {

    if (array2.indexOf(team_2_rates[i]) === -1) {
        array2.push(team_2_rates[i])
    }

    $('#here_table_3').append('<tr><td>' + team_2_rates[i] + '</td></tr>');

}
console.log(array2);

// Palyers Team 1

$('#here_table_4').append('<tr><th>' + "Player Name" + '</tr></th>');

const playeTeam2 = ["Basher", "Amine", "Omar", "Mahmoud", "Ammar", "Fadi", "Samir" ,"Sum"]

playeTeam2.forEach(element => {
    return $('#here_table_4').append('<tr><td>' + element + '</td></tr>');

});


let sum_2 = 0
for (let x = 0; x < team_2_rates.length; x++) {
    sum_2 += team_2_rates[x]
    
}

$('#here_table_3').append('<tr><td>' + sum_2 + '</td></tr>');



