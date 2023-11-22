const { emit } = require('nodemon')
const UserService = require('../services/UserService')

const createUser = async(req, res) => {
    try {
        const {userEmail, userPassword, cfPassword, userFname, userLname, address, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(userEmail)
        if (!userEmail || !userPassword || !cfPassword || !userFname || !userLname || !address || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } else if(userPassword != cfPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The confirm password is not equal to password'
            })
        } else if(!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        } 
        const response = UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch(e) {
        return res.status(404).json({
            status: 'Err',
            message: e
        })
    }
}

module.exports = {
    createUser
}