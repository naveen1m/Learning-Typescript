import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Learnig to use ts in node and using concurrently package to build and run at the same time.")
})

app.listen(5000, () => {
    console.log(`server is running at http://localhost:5000`)
})