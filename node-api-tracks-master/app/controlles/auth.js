const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

//TODO: Login!
const loginCtrl = async(req, res) => {
    try {

        const mockUser = {
          name: "Ruben",
          email: "test@test.com",
          password: "12345678",
          avatar:
            "https://scontent.fscl16-1.fna.fbcdn.net/v/t1.6435-9/73515725_10157041527264221_8751736906372349952_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHNQ8NxA4G6cVy_jXp8eNodLWmnu-sHv4otaae76we_ircV2QVrROEQ12Axr1HSZeg&_nc_ohc=ouEzUCxvPcEQ7kNvgEhRbd3&_nc_ht=scontent.fscl16-1.fna&_nc_gid=Ar8WwApJgS570AT7mAjHOuJ&oh=00_AYAEe5Rh51ay5cVSxkOWG8A4QbfJq1-yS-RBC5Pk0fekXg&oe=670B31B2",
        };

        const { email, password } = req.body


        if (mockUser.email !== 'test@test.com') {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = (mockUser.password === password)

        //TODO JWT 👉
        const tokenSession = await tokenSign(mockUser) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: mockUser,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
}

//TODO: Registramos usuario!
const registerCtrl = async(req, res) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }