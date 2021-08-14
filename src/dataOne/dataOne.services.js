const dataOneService = {
    getDataOne: (dbDataOne) => {
        return dbDataOne('dataOne').select('*');
    },

    getDataOneId: (dbDataOne, id) => {
        return dbDataOne('dataOne').select('*').where({id}).first();
    },

    createDataOne: (dbDataOne, dataO) => {
        return dbDataOne('dataOne').insert(dataO).returning("*").then(data => data[0]);
    },

    updateDataOne: (dbDataOne, dataO) => {
        return dbDataOne('dataOne').update(dataO).where({id: dataO.id});
    },

    deleteDataOne: (dbDataOne, id) => {
            return dbDataOne('dataOne').where({id: id}).deleteDataOne();
    }
}


module.exports = dataOneService;