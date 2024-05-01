const post = require("./table")
async function createPost(title, description) {
    if (title, description) {
        await post.create({
            title: title,
            description: description
        })
    }
}
async function selectPost(id) {
    if (id) {
        return await post.findByPk(id)
    }
    return await post.findAll()
}
async function deletePost(id) {
    if (id) {
        await post.destroy({
            where: {
                id: id
            }
        })
    }
}
module.exports = { selectPost, createPost, deletePost }