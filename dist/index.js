"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const auth_routes_1 = __importDefault(require("./routes/auth_routes"));
app.use(express_1.default.json());
app.use('/api/auth', auth_routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Typescript Server Updates",
        success: true
    });
});
app.listen(3000, () => {
    console.log("Server is Running at 3000");
});
