const PubSub = require('../helpers/pub_sub.js');
const PremierLeagueView = require('./premier_league_view.js');

const PremierLeagueListView = function(container){
  this.teams = null;
  this.teamContainer = container;
}

PremierLeagueListView.prototype.bindEvents = function(){
  PubSub.subscribe('PremierLeague:data-ready', (event) => {
    this.teams = event.detail.teams;
    console.log(this.teams);
    this.render()
  })
}

PremierLeagueListView.prototype.render = function(){
  this.teams.forEach((team) => {
    const premierLeagueView = new PremierLeagueView(this.teamContainer, team);
    // console.log(premierLeagueView);
    premierLeagueView.render();
  })
};




module.exports = PremierLeagueListView;
