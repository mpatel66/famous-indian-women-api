const Person = require('../model/person.model');

async function getRandomPerson (ctx) {
  try {
    // get one Person documment randomly. Projection removes db id, so it's not exposed.
    const [person] = await Person.aggregate().sample(1).project('-_id');
    if (person) ctx.body = person;
    else ctx.status = 500;

  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
}

module.exports = getRandomPerson;