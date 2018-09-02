const PremierLeague = require('./models/premier_league.js');

document.addEventListener('DOMContentLoaded', () => {



const premierLeague = new PremierLeague('http://api.football-data.org/v2/competitions/PL/teams');
premierLeague.getData();
})
