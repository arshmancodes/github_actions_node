"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRoute = (req, res) => {
    res.status(200).json({
        message: "Working Route",
        success: true,
    });
};
