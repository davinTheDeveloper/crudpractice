const dataTwoService = require('./dataTwo.services');

async function create(req, res) {
    const { user_id, user_name, role } = req.body;
    const db = req.app.get('db');
    const data_two = { user_id, user_name, role };
    const newDataTwo = await dataTwoService.createDataTwo(db, data_two);
    res.status(201).json(newDataTwo);
}

async function read(req, res) {
    const db = req.app.get('db');
    const id = parseInt(req.params.id)
    const data_two = await dataTwoService.getDataTwo(db, id)
    if(!data_two){
        return next({status: 404});
    }
    res.json(data_one);
}

async function list(req, res) {
    const db = req.app.get('db');
    const data_two = await dataTwoService.getDataTwo(db);
    res.json(data_two);
}

async function update(req, res) {
    const { user_id, user_name, role } = req.body;
    const found = {
        id: req.params.id,
        user_id, user_name, role
    }
    const db = req.app.get('db');
    const data_two = await dataTwoService.updateDataTwo(db, found);
    res.json(data_two);
}

async function destroy(req, res) {
    const id = parseInt(req.params.id)
    const db = req.app.get('db')
    await dataTwoService.deleteDataTwo(db, id);
    res.sendStatus(204)
}
module.exports = {
    create: [create],
    list: [list],
    read: [read],
    update: [update],
    delete: [destroy],
}