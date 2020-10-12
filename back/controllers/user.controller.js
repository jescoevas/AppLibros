const User = require('../models/user.model')
const Book = require('../models/book.model')
const bcryptjs = require('bcryptjs')

let userController = {}

userController.newUser = async (req, resp) => {
    const { user, nickname } = req.body
    const userFound = await User.find({user})
    const nicknameFound = await User.find({nickname})
    if(userFound.length > 0){
        return resp.json({
            msg:'User exists',
            userDB:{}
        })
    }else if(nicknameFound.length > 0){
        return resp.json({
            msg:'Nickname exists',
            userDB:{}
        })
    }else{
        delete req.body.confirmPassword
        delete req.body.success
        const userDB = new User(req.body)
        const salt = await bcryptjs.genSalt()
        const hashPassword = await bcryptjs.hash(userDB.password, salt)
        userDB.password = hashPassword
        await userDB.save()
        return resp.json({
            msg:'Success',
            userDB
        })
    }
}

userController.login = async (req, resp) => {
    const { user, password } = req.body
    const users = await User.find({ user })
        if (users.length > 0) {
            const userDB = users[0]
            const match = await bcryptjs.compare(password, userDB.password)
            if (match) {
                return resp.json({
                    msg: 'Found',
                    userDB
                })
            } else {
                return resp.json({
                    msg: 'Wrong password',
                    userDB: {}
                })
            }
        }else {
            return resp.json({
                msg: 'Wrong user',
                userDB: {}
            })
        }
}

module.exports = {userController}