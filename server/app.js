const express = require("express")
const router = require("./router")
const cors = require("cors")
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log("server online on PORT ", PORT)
})
