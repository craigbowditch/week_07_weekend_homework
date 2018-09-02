const PremierLeagueView = function (container, team) {
  this.teamContainer = container;
  this.team = team;
}

PremierLeagueView.prototype.render = function () {
  const teamDiv = document.createElement('div');
  teamDiv.classList.add('team');

  const name = this.createTeamHeading();
  teamDiv.appendChild(name);

  const teamDetailList = this.createTeamDetailList();
  teamDiv.appendChild(teamDetailList);

  this.teamContainer.appendChild(teamDiv);
};

PremierLeagueView.prototype.createTeamHeading = function () {
  const name = document.createElement('h3');
  name.classList.add('team-name');
  name.textContent = this.team.name;
  // console.log(this.team.name);
  return name;
};
PremierLeagueView.prototype.createTeamDetailList = function () {
  const teamDetailList = document.createElement('ul');
  teamDetailList.classList.add('details');
  this.populateList(teamDetailList);
  return teamDetailList;
};

PremierLeagueView.prototype.populateList = function (list) {
  const founded = document.createElement('li');
  const crest = document.createElement('img');
  founded.textContent = `Founded in: ${this.team.founded}`;
  crest.src = this.team.crestUrl;
  list.appendChild(founded);
  list.appendChild(crest);
};
module.exports = PremierLeagueView;
