const dataTwoService = {
    getDataTwo: (dbDataTwo) => {
        return dbDataTwo('dataTwo').select('*');
    },

    getDataTwoId: (dbDataTwo, id) => {
        return dbDataTwo('dataTwo').select('*').where({id}).first();
    },

    createDataTwo: (dbDataTwo, dataT) => {
        return dbDataTwo('dataTwo').insert(dataT).returning("*").then(data => data[0]);
    },

    updateDataTwo: (dbDataTwo, dataT) => {
        return dbDataTwo('dataTwo').update(dataT).where({id: dataT.id});
    },

    deleteDataTwo: (dbDataTwo, id) => {
            return dbDataTwo('dataTwo').where({id: id}).deleteDataTwo();
    }
}


module.exports = dataTwoService;