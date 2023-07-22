import express from 'express';

exports.testRoute = (req: express.Request , res: express.Response) => {
    res.status(200).json({
        message: "Working Route",
        success: true,
    })
}