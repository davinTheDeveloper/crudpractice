const dataOneService = require('./dataOne.services');

async function create(req, res) {
    const { user_id, user_name, role } = req.body;
    const db = req.app.get('db');
    const data_one = { user_id, user_name, role };
    const newDataOne = await dataOneService.createDataOne(db, data_one);
    res.status(201).json(newDataOne);
}

async function read(req, res) {
    const db = req.app.get('db');
    const id = parseInt(req.params.id)
    const data_one = await dataOneService.getDataOne(db, id)
    if(!data_one){
        return next({status: 404});
    }
    res.json(data_one);
}

async function list(req, res) {
    const db = req.app.get('db');
    const data_one = await dataOneService.getDataOne(db);
    res.json(data_one);
}

async function update(req, res) {
    const { user_id, user_name, role } = req.body;
    const found = {
        id: req.params.id,
        user_id, user_name, role
    }
    const db = req.app.get('db');
    const data_one = await dataOneService.updateDataOne(db, found);
    res.json(data_one);
}

async function destroy(req, res) {
    const id = parseInt(req.params.id)
    const db = req.app.get('db')
    await dataOneService.deleteDataOne(db, id);
    res.sendStatus(204)
}
module.exports = {
    create: [create],
    list: [list],
    read: [read],
    update: [update],
    delete: [destroy],
}