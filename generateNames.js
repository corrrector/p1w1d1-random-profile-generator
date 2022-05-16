const randomProfile = require('random-profile-generator');

function generateNames(rand) {
  let nameArr = [];
  for (let i = 0; i < rand; i++) {
    nameArr.push(randomProfile.name());
  }
  return nameArr.join('\n');
}
module.exports = generateNames
