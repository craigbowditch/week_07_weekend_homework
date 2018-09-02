const Request = function (url) {
  this.url = url
}

const myHeaders = new Headers({
  'X-Auth-Token':
  'a5bca0d9087c4d3b904f83b77741db3a'
});

Request.prototype.get = function () {
  return fetch(this.url, {
    headers: myHeaders
  })
  .then(response => response.json());
};

module.exports = Request;
