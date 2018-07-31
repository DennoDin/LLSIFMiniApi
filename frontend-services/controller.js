const Promise = require("bluebird");
const knex = require("../backend-services/database/knex");

const getAllIdols = async () => {
    const allIdols = await knex.select().from("idols");
    return allIdols
}

const postIdol = async (id, name, unit, sub_unit) => {
  await knex('idols').insert({id: id, name: name, unit: unit, sub_unit: sub_unit})
  return;
}

const getIdol = async (name) => {
  const idol = await knex('idols').select().where({name: name})
  return idol;
}

const patchIdol = async (name, idolName, unit, sub_unit) => {
  await knex('idols')
    .where({name: name})
    .update({name:idolName, unit: unit, sub_unit: sub_unit});
}

const deleteIdol = async (name) => {
  await knex('idols').where({name: name}).del();
}
module.exports = { getAllIdols, postIdol, getIdol, patchIdol, deleteIdol };