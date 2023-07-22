import express from "express";
const app = express();
import authRoutes from './routes/auth_routes';

app.use(express.json());

app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Typescript Server Updates",
        success: true
    })
})

app.listen(3000, () => {
    console.log("Server is Running at 3000");
})