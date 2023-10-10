import express from 'express';
import userRouter from './routers/user.js';
const app = express();
app.get("/", (req, res) => {
    res.send("Hello, Learnig to use ts in node and using concurrently package to build and run at the same time.");
});
app.use("/user", userRouter);
app.listen(5000, () => {
    console.log(`server is running at http://localhost:5000`);
});
