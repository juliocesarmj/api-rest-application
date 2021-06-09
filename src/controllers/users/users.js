const UsersModel = require('../../models/users/users')

async function get(req, res) {
    const {id} = req.params
    const obj = id ? {_id: id} : null
    const users = await UsersModel.find(obj)

    res.send(users)
}

async function post(req, res) {
    const {first_name, last_name, age, email, city, state} = req.body

    const user = new UsersModel({
        first_name,
        last_name,
        age,
        email,
        city,
        state,
    })

    user.save()

    res.send()
}

async function put(req, res) {
    const {id} = req.params

    const user = await UsersModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        user
    })
}

async function remove(req, res) {
    const {id} = req.params
    const remove = await UsersModel.deleteOne({_id: id})

    const message = remove.ok ? 'success' : 'error'
    res.send(message)
}
module.exports = {
    get,
    post,
    put,
    remove
}