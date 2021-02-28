const Person = require('../model/person.model');

async function getRandomPerson (ctx) {
  try {
    // get one Person documment  randomly.
    const [person] = await Person.aggregate().sample(1);
    if (person) ctx.body = person;
    else ctx.status = 500;

  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
}

module.exports = getRandomPerson;