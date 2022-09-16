console.log("arrowTitle");

//*checking that we working's the body
const body = $("body");

//*Make A All Details Container Div
const allDetailesDiv = $(`<div id="allDetailesDiv">
</div>`);
allDetailesDiv.appendTo(body);

//Rate Team 1

$("#here_table").append("<tr><th>" + "Rate" + "</tr></th>");

let team_1_rates = [];

for (let i = 0; i < 7; i++) {
  let rate = Math.ceil(Math.random() * 10);

  if (team_1_rates.indexOf(rate) === -1) {
    team_1_rates.push(rate);

    $("#here_table").append("<tr><td>" + team_1_rates[i] + "</td></tr>");
  } else i--;
}

/*   const rndInt = randomIntFromInterval(1, 6) */
/*  console.log(rndInt) */

let sum = 0;
for (let x = 0; x < team_1_rates.length; x++) {
  sum += team_1_rates[x];
}
$("#here_table").append("<tr><td>" + sum + "</td></tr>");
console.log(team_1_rates);
console.log(sum);

// Players Team 1

$("#here_table_2").append("<tr><th>" + "Player Name" + "</tr></th>");

const playerTeam1 = [
  "Fouad",
  "Mustafa",
  "Samir",
  "Ali",
  "Shishani",
  "Afagani",
  "Kahaf",
  "Sum",
];

playerTeam1.forEach((element) => {
  return $("#here_table_2").append("<tr><td>" + element + "</td></tr>");
});

//----------------------------------------//

//Rate Team 2

$("#here_table_3").append("<tr><th>" + "Rate" + "</tr></th>");


let sum_2 = sum;
;
let team_2_rates = [];

team_2_rates[0] = Math.floor(0.06 * sum_2);
team_2_rates[1] = Math.floor(0.24 * sum_2);
team_2_rates[2] = Math.floor(0.09 * sum_2);
team_2_rates[3] = Math.floor(0.12 * sum_2);
team_2_rates[4] = Math.floor(0.15 * sum_2);
team_2_rates[5] = Math.floor(0.18 * sum_2);
arraySum = team_2_rates.reduce((partialSum, a) => partialSum + a, 0);
team_2_rates[6] = sum_2 - arraySum;

for (let i = 0; i < team_2_rates.length -1; i++) {
  $("#here_table_3").append("<tr><td>" + team_2_rates[i] + "</td></tr>");
}
$("#here_table_3").append("<tr><td>" + team_2_rates[6] + "</td></tr>");
$("#here_table_3").append("<tr><td>" + sum_2 + "</td></tr>");

// Players Team 1

$("#here_table_4").append("<tr><th>" + "Player Name" + "</tr></th>");

const playerTeam2 = [
  "Basher",
  "Amine",
  "Omar",
  "Mahmoud",
  "Ammar",
  "Fadi",
  "Samir",
  "Sum",
];

playerTeam2.forEach((element) => {
  return $("#here_table_4").append("<tr><td>" + element + "</td></tr>");
});
