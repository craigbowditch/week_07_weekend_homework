const Request = require('../helpers/request.js');

const PremierLeague = function (url) {
  this.teams = null;
  this.url = url;
}



PremierLeague.prototype.getData = function () {
  const request = new Request(this.url);
  request.get().then((data) => {
    console.log(data);
  }).catch((err) => {
    console.error(err);

  })
};


module.exports = PremierLeague;
