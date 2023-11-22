
const db = require('../models');
const data = require('../data');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const {userEmail, userPassword, cfPassword, userFname, userLname, address, phone} = newUser;
        try {
            const createdUser = await db.users.bulkCreate(data.users)
            
            if(createdUser) {
                resolve({
                    status: 'OK',
                    message: 'Success!'
                })
            }
        } catch (e) {
            reject(e)
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'

            })
        }
    })
}

module.exports = {
    createUser
}