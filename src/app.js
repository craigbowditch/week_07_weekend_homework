const PremierLeague = require('./models/premier_league.js');
const PremierLeagueListView = require('./views/premier_league_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

const premierLeagueListContainer = document.querySelector('#teams')
const premierLeagueListView = new PremierLeagueListView(premierLeagueListContainer);
premierLeagueListView.bindEvents();



const premierLeague = new PremierLeague('http://api.football-data.org/v2/competitions/PL/teams');
premierLeague.getData();
})
