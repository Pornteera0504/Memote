const { pool } = require('../utilities/databaseConfig')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const passwordValidator = (value, helpers) => {
    if (value.length < 8) {
        throw new Joi.ValidationError('Password must contain at least 8 characters')
    }
    if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        throw new Joi.ValidationError('Password must be harder')
    }
    return value
}
const userNameValidator = async (value, helpers) => {
    const [rows, _] = await pool.query(
        "SELECT userName FROM users WHERE userName = ?",
        [value]
    )
    if (rows.length > 0) {
        const message = 'This user is already taken'
        throw new Joi.ValidationError(message, { message })
    }
    return value
}
const emailValidator = async (value, helpers) => {
    const [rows, _] = await pool.query(
        "SELECT userName FROM users WHERE email = ?",
        [value]
    )
    if (rows.length > 0) {
        const message = 'This email is already taken'
        throw new Joi.ValidationError(message, { message })
    }
    return value
}
const registerSchema = Joi.object({
    email: Joi.string().required().email().external(emailValidator),
    password: Joi.string().required().custom(passwordValidator),
    userName: Joi.string().required().min(1).external(userNameValidator),
    image: Joi.string()
})
const registerUser = async (req, res) => {
    try{
        await registerSchema.validateAsync(req.body, { abortEarly: false })
    }catch(error){
        res.status(400).json(error.toString())
        return {}
    }

    const conn = await pool.getConnection()
    await conn.beginTransaction()
    const userName = req.body.userName
    const password = await bcrypt.hash(req.body.password, 10)
    const email = req.body.email

    try{
        await conn.query(
        'INSERT INTO users(userName, email, status, password) ' +
        'VALUES (?, ?, ?, ?)',
        [userName, email, "offline", password]
    )
        conn.commit()
        res.status(201).send("Register Success")
    }catch(error){
        conn.rollback()
        res.status(400).send("[Register module] Something went wrong. & Register failure")
    }finally {
        conn.release()
        return {}
    }
}

module.exports = { registerUser }