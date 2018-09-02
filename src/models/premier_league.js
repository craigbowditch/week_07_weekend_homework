const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js')

const PremierLeague = function (url) {
  this.teams = null;
  this.url = url;
}



PremierLeague.prototype.getData = function () {
  const request = new Request(this.url);
  request.get().then((data) => {
    this.handData(data);
  }).catch((err) => {
    console.error(err);

  })

  PremierLeague.prototype.handData = function(data){
    this.teams = data;
    PubSub.publish('PremierLeague:data-ready', this.teams);
  }
};


module.exports = PremierLeague;
