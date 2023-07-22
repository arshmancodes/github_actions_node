const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Updated successfully",
        success: true,
    })
})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
})