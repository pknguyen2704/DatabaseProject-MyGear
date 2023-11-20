const User = require('../models/UserModel')

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const {userEmail, userPassword, cfPassword, userFname, userLname, address, phone, isAdmin} = newUser
        try {
            const createdUser = await User.create({
                userEmail, 
                userPassword, 
                cfPassword, 
                userFname, 
                userLname, 
                address, 
                phone, 
                isAdmin
            })
            if(createdUser) {
                console.log("chuan")
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser
}