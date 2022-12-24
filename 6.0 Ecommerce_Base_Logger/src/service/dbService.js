const logger = require("../config/logger.config");

const mockDbService = () => {
    const pr = new Promise((resolve, reject) => {
        const isError = !!Math.round(Math.random());
        setTimeout(() => {
            if (isError) {
                logger.info("dbService Error")
                reject("Data not found");
            } else {
                logger.info("dbService Success")
                resolve("Data found");
            }
        }, 2000);
    });

    return pr;
}

module.exports = mockDbService;