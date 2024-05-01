const express = require("express")
const { deletePost, createPost, selectPost } = require("../database/query")
const router = express.Router()

router.get("/", async (req, res) => {
    const response = await selectPost()
    res.status(200).type("json").send(response)
})
router.get("/:id", async (req, res) => {
    const { id } = req.params
    const response = await selectPost(id)
    return res.status(200).type("json").send(response)
})
router.post("/", async (req, res) => {
    const { title, description } = req.body
    if (title && description) {
        await createPost(title, description)
        return res.status(200).send({ info: "post criado" })
    }
    return res.status(400).send({ info: "dados informados incompletos" })
})
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    if (id) {
        await deletePost(id)
        return res.status(200).send({ info: "post deletado" })
    }
    return res.status(400).send({ info: "dados informados incompletos" })
})
module.exports = router