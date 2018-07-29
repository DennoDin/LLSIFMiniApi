const Promise = require("bluebird");
const validateStr = (string) =>
  typeof string === "string" && string.replace(" ", "").length > 0;

module.exports = (knex) => {
  return ({ name, unit, subUnit }) => {
    return Promise.try(() => {
      if (!validateStr(name) || !validateStr(unit)) {
        throw new Error(
          "Must pass in something"
        );
      }
    })
      .then(() =>
        knex("idols").insert({
          name,
          unit,
          sub_unit: subUnit,
        })
      )
      .then(() => {
        return knex("idols")
          .select();
      })
      .then((idolInfo) => {
        return idolInfo.map((person) => {
          const obj = {
            name: person.name,
            unit: person.unit,
            sub: person.sub_unit
          };
          return obj;
        });
      })

      .catch((err) => {
        if (err.message.match("Idol already exists"))
          throw new Error("Idol already exists");

        throw err;
      });
  };
};
