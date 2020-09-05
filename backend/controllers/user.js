const userController = {}
const Model = require('./../Models/User')

userController.create = async(req, res) => {
    try {
        const { body } = req
        let user = await Model.create({ name: body.name, player: body.player, colours: body.colours })
        res.send(user)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

userController.get = async(req, res) => {
    try {
        let users = await Model.findAll()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

userController.put = async(req, res) => {
    try {
        const { body, params } = req
        let user = await Model.update({ name: body.name, player: body.player, colours: body.colours }, { where: { id: params.id } })
        res.send(user)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

userController.delete = async(req, res) => {
    try {
        const { params } = req
        await Model.destroy({ where: { id: params.id } })
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

module.exports = userController