const express = require('express');
const exp = express();
exp.use(express.json());
const path = require('path');
const { getAllIdols, postIdol, getIdol, patchIdol, deleteIdol } = require('./controller');

const OK = 200;

//add GET, POST, PUT, DELETE, ETC here
exp.get("/api/", (req, res) => { //homepage
  res.status(OK).sendFile('homePage.html', { root: path.join(__dirname, '../') });
})

exp.get('/api/idol', async (req, res) => { //returns all idols stats
  const result = await getAllIdols()
  res.status(OK).json(result);
})

exp.post('/api/idol', async (req, res) => { //adds idol to the list
  const {id, name, unit, sub_unit} = req.body;
  await postIdol(id, name, unit, sub_unit);
  res.status(201).end();
})

exp.get('/api/idol/:name', async (req, res) => { //returns specified idol stats
  const { name } = req.params;
  const result = await getIdol(name);
  res.status(OK).json(result);
})

exp.patch('/api/idol/:name', async (req, res) => { //replaces a piece of data in the idols table given a name
  const { idolName, unit, sub_unit } = req.body;
  const { name } = req.params;
  await patchIdol(name, idolName, unit, sub_unit);
  res.status(201).end();
})

exp.delete('/api/idol/:name', async (req, res) => { // deletes a specified idol by name
  const { name } = req.params;
  await deleteIdol(name);
  res.status(OK).end();
})


exp.listen(21192);