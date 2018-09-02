const PubSub = require('../helpers/pub_sub.js');

const PremierLeagueListView = function(container){
  this.teams = null;
  this.container = container;
}

PremierLeagueListView.prototype.bindEvents = function(){
  PubSub.subscribe('PremierLeague:data-ready', (event) => {
    this.teams = event.detail;
    console.log(event.detail);
  })
}






module.exports = PremierLeagueListView;
