const { emit } = require('nodemon')
const UserService = require('../services/UserService')

const createUser = async(req, res) => {
    try {
        console.log(req.body)
        const {userEmail, userPassword, cfPassword, userFname, userLname, address, phone, isAdmin} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(userEmail)

        if(!userEmail || !userFname || !userLname || !address || !phone) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'This input is required'
            })
        } else if(!isCheckEmail){
            return res.status(200).json({
                status: 'ERROR',
                message: 'This input is email'
            })
        } else if(userPassword != cfPassword) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The password is not equal to confirm password'
            })
        }
        const respond = await UserService.createUser(req.body)
        return res.status(200).json(respond)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser
}